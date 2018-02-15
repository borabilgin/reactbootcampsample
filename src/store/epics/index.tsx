import * as constants from '../constants';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Move, win } from '../actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';

// const url = 'https://bootcamp-todo-api.herokuapp.com/api/winner';
const url = 'http://localhost:8080/api/winner';

export const rootEpic = (action$: any) =>
    action$.ofType(constants.MOVE)
        .mergeMap((action: Move) => 
            ajax.post(url, action.history[action.history.length - 1])
                .filter((res: AjaxResponse) => res.response !== null)
                .map((winner: AjaxResponse) =>
                    win(winner.response)
                ));