import Slide from '../Slide';

const slide =  Slide (`
# Single source of truth

**The state of your whole application is stored in an object tree within a single store.**

* Can be serialized and hydrated no extra effort
* Easier to debug

\`\`\`
  const default_state = Map({
        size: 4,
        tries: 0,
        max: 5,
        won: false,
        failed: false,
        rabbit: Map({
            x: 2,
            y: 2 
        }), 
        selected: List([])
\`\`\`
`,'rabbit');     

export default slide;