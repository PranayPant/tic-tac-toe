import {BoardCell, BoardMatrix} from '../types/BoardCell'

export const createInitialState = (rows: number) : BoardMatrix => {
    const matrix: BoardMatrix = []
    const cell: BoardCell = {onPath: false, value: ''}

    for(let r = 0; r < rows; r++){
        matrix.push([])
        for(let c = 0; c < rows; c++){
            matrix[r].push(cell)
        }
    }
    return matrix
}