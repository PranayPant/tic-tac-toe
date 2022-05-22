export interface BoardCell {
    onPath: boolean,
    value: 'O' | 'X' | ''
}

export type BoardRow = Array<BoardCell>
export type BoardMatrix = Array<BoardRow>