import Slide from '../Slide';

const slide = Slide(`
# The Store

## Facebook Immutable.js
[https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

[https://www.youtube.com/watch?v=I7IdS-PbEgI&feature=youtu.be](https://www.youtube.com/watch?v=I7IdS-PbEgI&feature=youtu.be)

* A naive copy is very inefficent
    * For example an array of a 10,000 items where you modify one value. You end up copying the whole array each time.
* Immutable gives "smart" collections for things like Arrays and Maps where only the modified items are changed behind the scenes
* Same performance (or close enough) as mutating collections directly but still satisfy the requirement of being Immutable
* Watch the video for a full explanation!

`);

export default slide;