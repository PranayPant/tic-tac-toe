// eslint-disable
import React, {useState} from 'react'
import {Container, Row} from 'react-bootstrap'

import Cell from '../../components/Cell'

import {BoardCell, BoardMatrix, BoardRow} from '../../types/BoardCell'
import {createInitialState} from '../../utils'
import {MAX_ROWS} from '../../constants'

interface BoardProps {
    className?: string
}

const Board: React.FC<BoardProps> = ({className}) => {

    const initialState: BoardMatrix = createInitialState(MAX_ROWS)
    const [matrix, setMatrix] = useState<BoardMatrix>(initialState)

    const handleHover = (rowIndex: number, 
        colIndex: number, 
        entered: boolean) => {
        const newMatrix: BoardMatrix = [...matrix]
        for(let row = 0; row < MAX_ROWS; row++){
            for(let col = 0; col < MAX_ROWS; col++){
                if(row === rowIndex || col === colIndex){
                    newMatrix[row][col] = {
                        ...matrix[rowIndex][colIndex], onPath: entered
                    }
                }
                
            }
        }
        setMatrix(newMatrix)
    }

    return (
        <Container 
            className={className}>
            {matrix.map((row: BoardRow, rowIndex) => (
                <Row className='board-row'>
                    {row.map(({onPath, value}: BoardCell, colIndex) => (
                        <Cell 
                            rightEdge={colIndex === MAX_ROWS - 1}
                            bottomEdge={rowIndex === MAX_ROWS - 1}
                            onPath={onPath}
                            value={value}
                            onMouseOver={
                                (e) => handleHover(rowIndex, colIndex, true)
                            }
                            onMouseOut={
                                (e) => handleHover(rowIndex, colIndex, false)
                            }
                        />
                    ))}
                </Row>
            ))

            }
        </Container>
    )
}

export default Board