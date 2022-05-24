/* eslint-disable react/no-array-index-key */
import React, { useState, MouseEvent } from "react";
import { Row } from "react-bootstrap";

import Cell from "components/Cell";
import Banner from "components/Banner";
import Loader from "components/Loader/Loader";

import { BoardCell, BoardMatrix, BoardRow } from "types/BoardCell";
import {
    createInitialMatrix,
    createInitialMoves,
    calculateHoverMatrix
} from "utils";
import { MAX_ROWS } from "constants/app";
import { fetchNextMove } from "api";
import { BoardMoves, MoveResponse } from "types/Move";

interface MoveState {
    loading: boolean;
    error: boolean;
    moves: BoardMoves;
}

const Board: React.FC = () => {
    const [matrix, setMatrix] = useState<BoardMatrix>(createInitialMatrix());
    const [moveState, setMoveState] = useState<MoveState>({
        loading: false,
        error: false,
        moves: createInitialMoves()
    });

    const updateMoves = (newMoves: BoardMoves) => {
        let finalMoves: BoardMoves = [];
        let error = false;
        setMoveState((prev) => ({ ...prev, loading: true }));
        fetchNextMove({
            board: newMoves
        })
            .then((res: MoveResponse) => {
                if (res.success) {
                    finalMoves = res.board;
                    error = false;
                } else {
                    error = true;
                }
            })
            .catch(() => {
                error = true;
            })
            .finally(() => {
                setMoveState((prev) => ({
                    ...prev,
                    moves: finalMoves,
                    loading: false,
                    error
                }));
            });
    };

    const handleHover = (e: MouseEvent<HTMLElement>, entered: boolean) => {
        e.preventDefault();
        let newMatrix: BoardMatrix = [];
        let targetRow = -1;
        let targetCol = -1;
        const cell: HTMLElement = e.target as HTMLElement;
        if (entered) {
            targetRow = parseInt(cell.getAttribute("row") as string, 10);
            targetCol = parseInt(cell.getAttribute("col") as string, 10);
        }
        newMatrix = calculateHoverMatrix({
            matrix,
            targetRow,
            targetCol,
            entered
        });
        setMatrix(newMatrix);
    };

    const handleMove = (e: MouseEvent<HTMLInputElement>) => {
        const cell: HTMLElement = e.target as HTMLElement;
        const row = parseInt(cell.getAttribute("row") as string, 10);
        const col = parseInt(cell.getAttribute("col") as string, 10);
        const newMoves: BoardMoves = [...moveState.moves];
        newMoves[row][col] = "X";
        updateMoves(newMoves);
    };

    return (
        <div>
            <Loader active={moveState.loading} />
            {moveState.error && (
                <Banner
                    variant="danger"
                    text="Oops! Could not fetch next move."
                    onClose={() =>
                        setMoveState((prev) => ({ ...prev, error: false }))
                    }
                />
            )}
            <div
                className="board"
                onMouseLeave={(e: MouseEvent<HTMLElement>) =>
                    handleHover(e, false)
                }
            >
                {matrix.map((row: BoardRow, rowIndex) => (
                    <Row key={rowIndex} className="board-row">
                        {row.map(({ onPath }: BoardCell, colIndex) => (
                            <Cell
                                row={rowIndex}
                                col={colIndex}
                                key={`${rowIndex}-${colIndex}`}
                                rightEdge={colIndex === MAX_ROWS - 1}
                                bottomEdge={rowIndex === MAX_ROWS - 1}
                                onPath={onPath}
                                value={moveState.moves[rowIndex][colIndex]}
                                onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                    handleHover(e, true);
                                }}
                                onClick={handleMove}
                            />
                        ))}
                    </Row>
                ))}
            </div>
        </div>
    );
};

export default Board;
