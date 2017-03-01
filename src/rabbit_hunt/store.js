import {createStore} from 'redux'
import {Map, List} from 'immutable'
import grid from './reducer'
  
let store = createStore(grid, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export function getDefaultState() {
    const default_state = Map({
        size: 4,
        tries: 0,
        max: 5,
        won: false,
        failed: false,
        rabbit: Map({
            x: 2,
            y: 2 
        }), 
        selected: List([])
    });

    return default_state;
}

export default store;