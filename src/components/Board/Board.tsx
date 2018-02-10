import * as React from 'react';
import Square from '../Square/Square';

interface BoardProps {
    squares: string[];
    onClick: (i: number) => any;
}

const Board: React.StatelessComponent<BoardProps> = ({squares, onClick}) => {
    // this is an example of a pure function
    const renderSquare = (i: number) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    };

    return (
        <div>
            <div className="board-row">
                {/* below is a JSX expression, encapsulated in square brackets */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;