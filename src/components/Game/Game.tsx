import * as React from 'react';
import Board from '../Board/Board';
import calculateWinner from '../../util/CalculateWinner';
// if you don't import your resources (e.g. CSS or graphics), Webpack will get rid of them during tree shaking
import './Game.css';
import * as actions from '../../store/actions';
import { Squares, GameState } from '../../store/State';
import { connect, Dispatch } from 'react-redux';

interface GameProps {
    history: Squares[];
    stepNumber: number;
    xIsNext: boolean;
    onGameMove: (history: Squares[], stepNumber: number, xIsNext: boolean) => actions.Move;
}

class Game extends React.Component<GameProps, {}> {
    constructor(props: GameProps, state: {}) {
        // always need to call super first with passed in props and state 
        super(props, state);

        // no need for local state now that we're using redux
        // // now we can set the initial state
        // // normally you have to call setState, but in constructor we first need to create the state object
        // this.state = {
        //     history: [{ squares: Array(9).fill(null) }],
        //     stepNumber: 0,
        //     xIsNext: true
        // };
    }

    handleClick(i: number) {
        const history = this.props.history;
        // last entry
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // if there is a winner, or is the squares array is already filled in that location, return
        if (calculateWinner(squares as [string]) || squares[i]) {
            return;
        }

        squares[i] = this.props.xIsNext ? 'X' : 'O';

        this.props.onGameMove(
            history.concat([{squares}]),
            history.length,
            !this.props.xIsNext
        );
    }

    jumpTo(step: number) {
        this.props.onGameMove(
            this.props.history.slice(0, step + 1),
            step,
            (step % 2) ? false : true,
        );
    }

    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares as [string]);

        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
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

// Takes the global application state, and maps it to our Component props
// So our component props are always created by the global app state
export function mapStateToProps(state: GameState) {
    return {
        history: state.history,
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext
    };
}

// this binds the action handler method (i.e. onGameMove) to a method in our props,
// so that we can call it like myprops.onGameMove and the action handler will be triggerred
export function mapDispatchToProps(dispatch: Dispatch<actions.GameAction>) {
    return {
        // tslint:disable-next-line:max-line-length
        onGameMove: (history: Squares[], stepNumber: number, xIsNext: boolean) => dispatch(actions.move(history, stepNumber, xIsNext))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);