import * as constants from '../constants';
import { Squares } from '../State';

export interface Move {
    type: constants.MOVE;
    history: Squares[];
    stepNumber: number;
    xIsNext: boolean;
}

export type GameAction = Move;

export function move(history: Squares[], stepNumber: number, xIsNext: boolean): Move {
    return {
        type: constants.MOVE,
        history: history,
        stepNumber: stepNumber,
        xIsNext: xIsNext
    };
}