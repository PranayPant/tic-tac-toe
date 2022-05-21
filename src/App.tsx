import React from 'react'

import Board from './components/Board'

function TicTacToe() {
    return (
        <div id="app">
            <h1>Tic-Tac-Toe</h1>
            <Board className="board" />
        </div>
    )
}

export default TicTacToe
