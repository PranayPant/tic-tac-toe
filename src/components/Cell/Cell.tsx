/* eslint-disable */

import React from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

import {BoardCell} from '../../types/BoardCell'



interface CellProps extends BoardCell {
    rightEdge?: boolean
    bottomEdge?: boolean
    onMouseOver?: (e: any) => void
    onMouseOut?: (e: any) => void
}

const Cell: React.FC<CellProps> = ({rightEdge, bottomEdge, onPath, onMouseOver, onMouseOut}) => {

    const StyledCol = styled(Col)`
        height: 100%;
        width: 33%;
        background-color: ${onPath ? 'lightgreen' : 'lightgray'};
        border-right: ${rightEdge ? 'none' : '5px solid black'};
        border-bottom: ${bottomEdge ? 'none' : '5px solid black'};
    `

    return (
        <StyledCol 
            onMouseEnter={onMouseOver}
            onMouseOut={onMouseOut}
            align="center" />
    )
}

export default Cell