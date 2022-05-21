// eslint-disable
import React, {useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import Cell from '../../components/Cell'

interface BoardProps {
    className?: string
}

interface BoardCell {
    onPath: boolean,
    value: 'O' | 'X' | ''
}

type BoardRow = Array<BoardCell>
type BoardMatrix = Array<BoardRow>

const Board: React.FC<BoardProps> = ({className}) => {

    const initialState: BoardMatrix = [
        [
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}
        ],
        [
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}
        ],
        [
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}, 
            {onPath: false, value: ''}
        ],
    ]

    const [matrix, setMatrix] = useState<BoardMatrix>(initialState)

    return (
        <Container 
            onHover={(e: any) => console.log(e.target)} 
            className={className}>
            <Row className='board-row'>
                <Cell />
                <Cell />
                <Cell rightEdge />
            </Row>
            <Row className='board-row'>
                <Cell />
                <Cell />
                <Cell rightEdge />
            </Row>
            <Row className='board-row'>
                <Cell bottomEdge />
                <Cell bottomEdge />
                <Cell bottomEdge rightEdge />
            </Row>
        </Container>
    )
}

export default Board