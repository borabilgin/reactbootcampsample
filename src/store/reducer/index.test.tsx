import * as reducer from './index';
import * as types from '.././constants/index';
import * as actions from '../actions/index';
import { GameState } from '../State';

describe('reducer tests', () => {

    let gameState: GameState;

    beforeEach(() => {
        gameState = {
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
            lastWinner: ''
        };
    });

    it('should handle a `MOVE` action', () => {
        const moveAction: actions.Move = {
            type: types.MOVE,
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 1,
            xIsNext: false
        };

        expect(reducer.handleMove(gameState, moveAction)).toEqual({
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 1,
            xIsNext: false,
            lastWinner: ''
        });
    });

    it('should handle a `WIN` action', () => {
        // TODO: Implement this test

        expect(true).toBe(true);
    });

    it('should return the current state for an unhandled action', () => {
        // TODO: Implement this test

        expect(true).toBe(true);
    });
});