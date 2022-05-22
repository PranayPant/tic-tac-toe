import React, {useState} from 'react'

import Board from 'components/Board'
import Login from 'components/Login'

import {authenticateUser} from './api'

function TicTacToe() {
    const [token, setToken] = useState<string | null>(window.sessionStorage.getItem('access_token'))
    const handleUserAuth = async (e: React.FormEvent<HTMLFormElement>, 
        email: string) => {
        e.preventDefault()
        const res = await authenticateUser({email})
        if(res.success){
            window.sessionStorage.setItem('access_token', res.token)
            setToken(res.token)
        }
    }
    return (
        <div id="app" className='centered'>
            <h1>Tic-Tac-Toe</h1>
            {token &&
                <Board className="board" />
            }
            {!token &&
                <Login handleSubmit={handleUserAuth} />
            }
            
        </div>
    )
}

export default TicTacToe
