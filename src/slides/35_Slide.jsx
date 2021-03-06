import Slide from '../Slide';

const Body = Slide(`
# Full Redux Lifecycle Example

* The Action Creator is called and returns the new State changes 

\`\`\`

const cellSelected = (x, y) => {
    
    // get our current state
    const state = store.getState();

    const rabbit = state.get("rabbit");

    // did we click the rabbit?
    let won = false;
    let lost = false;
    let tries = state.get("tries");

    if(x === rabbit.get("x") && y === rabbit.get("y")) {
        won = true;
    }
    // did we run out of clicks?
    else if(state.get("tries") + 2 > state.get("max")) {
        won = false;
        lost = true;
    } else {
        tries++;
    }
    
    return {
        type: CELL_SELECTED,
        won: won,
        lost: lost,
        tries,
        selected: ((x * 10) + y)
    }
}

\`\`\`
`);


export default Body;