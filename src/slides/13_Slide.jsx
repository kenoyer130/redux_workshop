import Slide from '../Slide';

const slide =  Slide (`
# State is read-only

**The only way to change the state is to emit an action, an object describing what happened.**

* Views and Network calls and anything else cannot write directly to the state, they can only
express an intent to write to the state

* All changes are centralized and synchronous (happen in order)

\`\`\`
store.dispatch({
    type: 'CELL_SELECTED',
    x: 3,
    y: 3
})
\`\`\`
`);     

export default slide;