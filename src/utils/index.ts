import {BoardCell, BoardMatrix} from '../types/BoardCell'
import { MAX_ROWS } from '../constants'

export const createInitialState = () : BoardMatrix => {
    const matrix: BoardMatrix = []
    const cell: BoardCell = {onPath: false, value: ''}

    for(let r = 0; r < MAX_ROWS; r++){
        matrix.push([])
        for(let c = 0; c < MAX_ROWS; c++){
            matrix[r].push(cell)
        }
    }
    return matrix
}

type MatrixHoverChangeProps = {
    matrix: BoardMatrix
    targetRow?: number
    targetCol?: number
    entered: boolean
}

export const calculateHoverMatrix = ({
    matrix, 
    targetRow, 
    targetCol, 
    entered} : MatrixHoverChangeProps) => {
    const hoverMatrix: BoardMatrix = [...matrix]
    for(let row = 0; row < MAX_ROWS; row++){
        for(let col = 0; col < MAX_ROWS; col++){
            if(entered && (row === targetRow || col === targetCol)){
                hoverMatrix[row][col] = {
                    ...matrix[row][col], onPath: true
                }
            }
            else{
                hoverMatrix[row][col] = {
                    ...matrix[row][col], onPath: false
                }
            }
        }
    }
    return hoverMatrix
}