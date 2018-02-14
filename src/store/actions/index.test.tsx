import * as actions from './index';
import * as types from '.././constants/index';
import { Squares } from '../State';

describe('actions', () => {

    // When testing action creators we want to test whether 
    // the correct action creator was called and also whether
    // the right action was returned
    it('should create an action to make a move', () => {
        const history: Squares[] = [
            { squares: ['X', 'O', '', '', '', '', '', '', ''] }
        ];
        const stepNumber: number = 3;
        const xIsNext: boolean = true;
        const type: types.MOVE = types.MOVE;

        const expectedAction: actions.Move = {
            type: type,
            history: history,
            stepNumber: stepNumber,
            xIsNext: xIsNext
        };

        expect(actions.move(history, stepNumber, xIsNext)).toEqual(expectedAction);
    });

    it('should create an action to win the game', () => {

        // TODO: Implement this test
        expect(true).toBe(true);
    });
});