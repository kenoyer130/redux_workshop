import Slide from '../Slide';

const Body = Slide(`
# Bit tricky to set up both 

* Middleware is the "plugin" system for Redux

\`\`\`
import {applyMiddleware, createStore} from 'redux'
import grid from './reducer'
import logger from 'redux-logger';

const store = createStore(grid, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger()));
\`\`\`

`, 'nerd')

export default Body;