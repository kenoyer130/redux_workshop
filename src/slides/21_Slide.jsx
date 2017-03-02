import Slide from '../Slide';

const slide = Slide(`
# Actions

* Must have a property of type
* Convention is to have the type by a const string for easier serialization

const type= 'DO_THING'

store.dispatch({
    type: DO_THING
});

`);

export default slide;