// eslint-disable
import React, {useState, MouseEvent} from 'react'
import {Row} from 'react-bootstrap'

import Cell from '../../components/Cell'

import {BoardCell, BoardMatrix, BoardRow} from '../../types/BoardCell'
import {createInitialState, calculateHoverMatrix} from '../../utils'
import { MAX_ROWS } from '../../constants'

interface BoardProps {
    className?: string
}

const Board: React.FC<BoardProps> = ({className}) => {

    const initialState: BoardMatrix = createInitialState()
    const [matrix, setMatrix] = useState<BoardMatrix>(initialState)

    const handleHover = (e: MouseEvent<HTMLElement>, entered: boolean) => {
        e.preventDefault()
        let newMatrix: BoardMatrix = []
        let targetRow: number = -1, targetCol: number = -1
        const cell: HTMLElement = e.target as HTMLElement
        if(entered){
            targetRow = parseInt(cell.getAttribute('row') as string)
            targetCol = parseInt(cell.getAttribute('col') as string)
        }
        newMatrix = calculateHoverMatrix({matrix, 
            targetRow,
            targetCol,
            entered
        })
        setMatrix(newMatrix)
    }

    return (
        <div 
            className={className}
            onMouseLeave={(e: MouseEvent<HTMLElement>) => handleHover(e, false)}
        >
            {matrix.map((row: BoardRow, rowIndex) => (
                <Row key={rowIndex} className='board-row'>
                    {row.map(({onPath, value}: BoardCell, colIndex) => (
                        <Cell
                            row={rowIndex}
                            col={colIndex}
                            key={colIndex}
                            rightEdge={colIndex === MAX_ROWS - 1}
                            bottomEdge={rowIndex === MAX_ROWS - 1}
                            onPath={onPath}
                            value={value}
                            onMouseEnter={
                                (e: MouseEvent<HTMLElement>) => {
                                    handleHover(e, true)
                                }}
                        />
                    ))}
                </Row>
            ))}
        </div>
    )
}

export default Board