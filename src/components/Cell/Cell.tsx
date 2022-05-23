/* eslint-disable */

import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

import {BoardCell} from '../../types/BoardCell'



interface CellProps extends BoardCell {
    rightEdge?: boolean
    bottomEdge?: boolean
    onMouseEnter?: (e: any) => void
    onMouseOut?: (e: any) => void
    row: number
    col: number
}

const Cell: React.FC<CellProps> = ({row, col, rightEdge, bottomEdge, onPath, onMouseEnter}) => {

    const [value, setValue] = useState<'X' | 'O' | ''>('')

    const StyledCol = styled(Col)`
        height: 100%;
        width: 33%;
        background-color: ${onPath ? 'lightgreen' : 'lightgray'};
        border-right: ${rightEdge ? 'none' : '5px solid black'};
        border-bottom: ${bottomEdge ? 'none' : '5px solid black'};

        input{
            width: 100%;
            height: 100%;
            background-color: ${onPath ? 'lightgreen' : 'lightgray'};
            border: none;
        }
    `

    return (
        <StyledCol
            row={row}
            col={col}
            align="center"
            onMouseEnter={onMouseEnter}
        >
            <input
                id='move' value={value} placeholder='' 
            />
        </StyledCol>
    )
}

export default Cell