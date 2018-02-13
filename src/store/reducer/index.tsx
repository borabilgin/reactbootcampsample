import { GameAction } from '../actions';
import { GameState } from '../State';
import { MOVE, WIN } from '../constants';

export function handleMove(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case MOVE: {
            return Object.assign({}, state, {
                history: action.history,
                stepNumber: action.stepNumber,
                xIsNext: action.xIsNext
            });
        } 
        case WIN : {
            return Object.assign({}, state, {
                lastWinner: action.lastWinner
            });
        } 
        default: {
            return state;
        }
    }
}