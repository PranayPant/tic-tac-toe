export type Move = "X" | "O" | "";
export type BoardMoves = Move[][];
export interface MoveRequest {
    board: BoardMoves;
}
export interface MoveResponse {
    success: boolean;
    board: BoardMoves;
}
