/* eslint-disable */

import React from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'


interface CellProps {
    rightEdge?: boolean
    bottomEdge?: boolean
    // is cell along the row or column path of the hovered cell
    onPath?: boolean
}

const Cell: React.FC<CellProps> = ({rightEdge, bottomEdge, onPath}) => {

    const StyledCol = styled(Col)`
        height: 100%;
        width: 33%;
        background-color: ${onPath ? 'lightgreen' : 'lightgray'};
        border-right: ${rightEdge ? 'none' : '5px solid black'};
        border-bottom: ${bottomEdge ? 'none' : '5px solid black'};
    `

    return (
        <StyledCol onHover={(e) => console.log(e.target + 'Cell')} 
            align="center" />
    )
}

export default Cell