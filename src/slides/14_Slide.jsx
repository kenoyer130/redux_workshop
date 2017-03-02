import Slide from '../Slide';

const slide =  Slide (`
# Changes are made with pure functions

**To specify how the state tree is transformed by actions, you write pure reducers.**

* A reducer is a Pure function that takes the previous state and an action, and returns the new state

* Must return a new state, not a modified version of an existing state

\`\`\`
function reducer(state = getDefaultState(), action) {

    if (action.type === CELL_SELECTED) {

        return state
            .set('tries', action.tries)
            .set('won', action.won)
            .set('lost', action.lost)
            .set("selected", state.get("selected").push(action.selected));
    }
}
\`\`\`
`);     

export default slide;