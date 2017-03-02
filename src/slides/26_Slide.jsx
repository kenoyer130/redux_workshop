import Slide from '../Slide';

const slide = Slide(`
# Splitting your Reducers

* Having one Reducer for a large application would be too much
* Split your reducers by Area of Concern, this is where you structure your application
* When creating the Store pass in all the reducers
    * Your app can still only have one store, but as may reducers as make sense
* By convention import your reducer under the name of the area it reduces
* You access each reduced store like *store.header.foo* or *state.grid.attempts*

\`\`\`
import header from './header_reducer'
import menu from './menu_reducer'
import grid from './grid_reducer'
  
let store = createStore(header, menu, grid)

\`\`\`
`);

export default slide;