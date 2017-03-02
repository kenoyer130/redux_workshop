import Slide from '../Slide';

const slide = Slide(`
# Reducer

* The Reducer must be a Pure function
* This means if argument A is passed in then B is returned every time
* This is why we can have no state mutations in the reducer 
    * (Such as api calls. If you call an api for record ID 4 there is no guarentee that same exact data will be returned every time)
* Put all the messy stuff in the Action Creator where it belongs
* Super easy to unit test

\`\`\`
// reducer.js
function grid(state = getDefaultState(), action) {

    if (action.type === CELL_SELECTED) {

        return state
            .set('tries', action.tries)
            .set('won', action.won)
            .set('lost', action.lost)
            .set("selected", state.get("selected").push(action.selected));

    } else if (action.type === RESET_SELECTED) {
        return getDefaultState();
    }

    return state;
}
\`\`\`
`);

export default slide;