import { createStore } from 'redux';
import { handleMove } from './reducer';
import { GameState } from './State';

export const store = createStore<GameState>(handleMove, {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
    // the below is for the Redux Dev Tools Chrome extension
// tslint:disable-next-line:max-line-length
},                                          (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());