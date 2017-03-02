import Slide from '../Slide';

const slide = Slide(`
# The Store

## Why is the Store Immutable?

* Allows faster performance since deeply nested complex types can just be compared by reference instead of value for changes
* Prevents unintentional side effects, like accidently changing an array value

`);

export default slide;