import { MOVE } from '../constants';
import { ajax } from 'rxjs/observable/dom/ajax';    // To issue response
import { Move, win } from '../actions';
import 'rxjs/add/operator/mergeMap';                // Merge events into one stream
import 'rxjs/add/operator/filter';                  // Filter out stream events
import 'rxjs/add/operator/map';                     // Perform action on each item
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';  // Type interface

const url = 'https://bootcamp-todo-api.herokuapp.com/api/winner';   // Server url

// Implement this epic
// export const rootEpic = () => {
//     return;
// };