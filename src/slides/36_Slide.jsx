import Slide from '../Slide';

const Body = Slide(`
# Full Redux Lifecycle Example

* The Reducer is passed the current State and the Action State changes and returns the new State

\`\`\`
function grid(state = getDefaultState(), action) {

    if (action.type === CELL_SELECTED) {

        return state
            .set('tries', action.tries)
            .set('won', action.won)
            .set('lost', action.lost)
            .set("selected", state.get("selected").push(action.selected));
    }
    
    ...

    return state;
}

\`\`\`
`);


export default Body;