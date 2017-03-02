import Slide from '../Slide';

const slide =  Slide (`
# Where did we leave off with React?

## Containers and Presentational Components

We have a pattern of a React component either being a:

* **Container**
    * Manages State and passes State to Presentationl Components as properties. 
    * Has the business logic.
    * Not designed to be re-usable
    * Is "Smart"

* **Presentation**
    * Has litte or no State. 
    * Mostly driven by passed in properties from the Container.
    * Designed to be re-usuable.
    * Is "Dumb"
`);     

export default slide;