import { GameAction } from '../actions';
import { GameState } from '../State';
import { MOVE } from '../constants';

export function handleMove(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case MOVE: {
            return {
                history: action.history,
                stepNumber: action.stepNumber,
                xIsNext: action.xIsNext
            };
        }
        default: {
            return state;
        }
    }
}