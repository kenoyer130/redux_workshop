import Slide from '../Slide';

const slide =  Slide (`
# So now what?

## Lot of Ring Around the Rosey
* State being passed down component chains and events being passed up
* Component A passes data to Component B to Component C that B does not care about
* Component C passes an event to Component B that passes the event to Component A but B has no interest in that event

## Not clear who mutated the state and why
* State mutation order of operation not clear
* What event triggered the mutation and why?
`);     

export default slide;