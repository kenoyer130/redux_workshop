import Slide from '../Slide';

const Body = Slide(`
# Lets time travel!

* Simply store the state on each reducer call in a stack
* Pop the stack on UNDO action
* Lets do the Time Warp again!

\`\`\`
 function grid(state = getDefaultState(), action) {   
     if(action.type !== UNDO) {
        states.push(state);
     }

    ...

    if(action.type === UNDO && states.length > 0 ) {
        return states.pop()
    }

    ...
}

\`\`\`


`, 'rabbit')

export default Body;