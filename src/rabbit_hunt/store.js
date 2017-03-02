import {applyMiddleware, createStore} from 'redux'
import {Map, List} from 'immutable'
import grid from './reducer'
import logger from 'redux-logger';

const store = createStore(grid, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger()));

export function getDefaultState() {
    const default_state = Map({
        size: 4,
        tries: 0,
        max: 6,
        won: false,
        failed: false,
        rabbit: Map({
            x: Math.floor(Math.random() * 4),
            y: Math.floor(Math.random() * 4)  
        }), 
        selected: List([])
    });

    return default_state;
}

export default store;