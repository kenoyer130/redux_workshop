import Slide from '../Slide';

const slide = Slide(`
# The Store

## Consists of three methods

* getState()
    * Returns the current state
* Dispatch
    * Fire actions to the reducer
* Subscribe
    * Is called when the reducer returns a new getState
    * When using Redux you won't subscribe to this, it is handled for you

`);

export default slide;