import * as constants from '../constants';
import { Squares } from '../State';
// import { Observable } from 'rx-dom';

// define action payload for MOVE
export interface Move {
    type: constants.MOVE;
    history: Squares[];
    stepNumber: number;
    xIsNext: boolean;
}

// define action payload for WIN
export interface Win {
    type: constants.WIN;
    lastWinner: string;
}

// GameAction is a type that encapsulated all our potential payloads
export type GameAction = Move | Win;

// specific action handler for move
export function move(history: Squares[], stepNumber: number, xIsNext: boolean): Move {
    return {
        type: constants.MOVE,
        history: history,
        stepNumber: stepNumber,
        xIsNext: xIsNext
    };
}

// specific action handler for win
export function win(winner: string): Win {
    return {
        type: constants.WIN,
        lastWinner: winner
    };
}