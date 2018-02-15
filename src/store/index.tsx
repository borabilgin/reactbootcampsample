import { createStore, applyMiddleware, compose } from 'redux';
import { handleMove } from './reducer';
import { rootEpic } from './epics';
import { GameState } from './State';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<GameState>(handleMove, {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
    lastWinner: ''
// tslint:disable-next-line:max-line-length
}, composeEnhancers(applyMiddleware(epicMiddleware)));