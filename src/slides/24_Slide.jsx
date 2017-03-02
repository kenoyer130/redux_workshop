import Slide from '../Slide';

const slide = Slide(`
# Reducer

* The Reducer "reduces" the state to the accumilation of all actions
* Takes in the current State and an Action
* Returns the new State based on that Action
* Is basically a big switch statement for all your Actions
* Must *ALWAYS* return a State (just returning the previous State is fine!)

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