import * as React from 'react';
import Board from '../Board/Board';
import calculateWinner from '../../util/CalculateWinner';
// if you don't import your resources (e.g. CSS or graphics), Webpack will get rid of them during tree shaking
import './Game.css';

interface SquareArray {
    [key: number]: string;
}

interface Squares {
    // typescript array indexer example
    // array key is index, value is string
    squares: SquareArray[];
}

interface GameState {
    history: Squares[];
    stepNumber: number;
    xIsNext: boolean;
}

class Game extends React.Component<{}, GameState> {
    constructor(props: {}, state: GameState) {
        // always need to call super first with passed in props and state 
        super(props, state);
        // now we can set the initial state
        // normally you have to call setState, but in constructor we first need to create the state object
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i: number) {
        const history = this.state.history;
        // last entry
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // if there is a winner, or is the squares array is already filled in that location, return
        if (calculateWinner(squares as [string]) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{squares}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares as [string]);

        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step: Squares, move: number) => {
            const desc = move ?
            'Move #' + move :
            'Game start';

            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares as string[]}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;