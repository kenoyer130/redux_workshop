import Slide from '../Slide';

const slide = Slide(`
# Action Creator

* A function that returns the Action based on passed in parameters
* Best practice is to have an Action Creator function for all Actions, even ones that just have a type
* The Action Creator also performs API calls or other business logic

\`\`\`
// my_action.js
const MY_ACTION = 'MY_ACTION';

myAction = (x, y) => {
    return {
        type: MY_ACTION,
        x,
        y
    }
}

export default myAction

// my_container.js
import myAction from './my_action'

store.dispatch(myAction(x,y));
\`\`\`

`);

export default slide;