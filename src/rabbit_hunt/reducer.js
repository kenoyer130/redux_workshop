import { getDefaultState } from './store'
import { CELL_SELECTED } from './actions/CellSelectedAction'
import { RESET_SELECTED } from './actions/ResetSelectedAction'
import { UNDO } from './actions/UndoAction'

let states = []

function grid(state = getDefaultState(), action) {

    if(action.type !== UNDO) {
        states.push(state);
    }

    if (action.type === CELL_SELECTED) {

        return state
            .set('tries', action.tries)
            .set('won', action.won)
            .set('lost', action.lost)
            .set("selected", state.get("selected").push(action.selected));
    }

    if (action.type === RESET_SELECTED) {
        states = []
        return getDefaultState();
    }

    if(action.type === UNDO && states.length > 0 ) {
        return states.pop()
    }

    return state;
}

export default grid;