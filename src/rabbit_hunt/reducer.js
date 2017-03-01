import { getDefaultState } from './store'
import { CELL_SELECTED } from './actions/CellSelectedAction'
import { RESET_SELECTED } from './actions/ResetSelectedAction'

function grid(state = getDefaultState(), action) {

    if (action.type === CELL_SELECTED) {

        return state
            .set('tries', action.tries)
            .set('won', action.won)
            .set('lost', action.lost)
            .set("selected", state.get("selected").push(action.selected));
    }

    if (action.type === RESET_SELECTED) {
        return getDefaultState();
    }

    return state;
}

export default grid;