import Slide from '../Slide';

const slide = Slide(`
# The Store

* To create the store call createStore in your entry point
* Pass it to the redux **Provider** which wraps your root component

\`\`\`
import {createStore} from 'redux'

let store = createStore(reducer)

...
 <Provider store={store}>
    <div>
        <HeaderContainer />
        <GridContainer />
        <ToolbarContainer />
    </div>
</Provider>
...

\`\`\`
`);

export default slide;