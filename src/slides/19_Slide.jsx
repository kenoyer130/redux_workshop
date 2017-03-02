import Slide from '../Slide';

const slide = Slide(`
# The Store

## Avoid Immutable by convention

* Everyone understands to copy Primatives (String, Number, etc)
* Too easy to accidently modify a collection and introduce side effects and "fun time" bugs
* Things like Javascript DeepFreeze do prevent modification but still do naive copying
* For large production level projects. When learning just focus on Redux first then introduce Immutable.js afterwords
`);

export default slide;