
export interface SquareArray {
    [key: number]: string;
}

export interface Squares {
    // typescript array indexer example
    // array key is index, value is string
    squares: SquareArray[];
}

export interface GameState {
    history: Squares[];
    stepNumber: number;
    xIsNext: boolean;
    lastWinner: string;
}