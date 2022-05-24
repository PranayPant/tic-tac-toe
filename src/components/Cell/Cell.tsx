/* eslint-disable */

import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

import { BoardCell } from "types/BoardCell";
import { Move } from "types/Move";

interface CellProps extends BoardCell {
    rightEdge?: boolean;
    bottomEdge?: boolean;
    onMouseEnter: (e: any) => void;
    onClick: (e: any) => void;
    row: number;
    col: number;
    value: Move;
}

const Cell: React.FC<CellProps> = ({
    row,
    col,
    rightEdge,
    bottomEdge,
    onPath,
    value,
    onMouseEnter,
    onClick
}) => {
    const StyledCol = styled(Col)`
        height: 100%;
        width: 33%;
        background-color: ${onPath ? "lightgreen" : "lightgray"};
        border-right: ${rightEdge ? "none" : "5px solid black"};
        border-bottom: ${bottomEdge ? "none" : "5px solid black"};
    `;

    const handleClick = (e: any) => {
        if (value) {
            return;
        }
        onClick(e);
    };

    return (
        <StyledCol
            disabled={!value}
            value={value}
            row={row}
            col={col}
            align="center"
            onMouseEnter={onMouseEnter}
            onClick={handleClick}
        >
            {value}
        </StyledCol>
    );
};

export default Cell;
