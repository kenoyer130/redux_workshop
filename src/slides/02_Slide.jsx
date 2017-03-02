import Slide from '../Slide';

const slide =  Slide (`
# Where did we leave off with React?

## State Hoisting

As we add parent containers and need more containers to know about state, 
we keep moving the state up the tree, until finally we have a root container with our global state. 

`);     

export default slide;