import Slide from '../Slide';

const Body = Slide(`
# Full Redux Lifecycle Example

* The new Store is passed back to all connected Containers who set new props, triggering rerenders based on our new state 

* In this case this is the same Container we saw make the Action request

## All Done!

\`\`\`
const mapStateToProps = (state) => {
    return {
        size: state.get("size"),
        won: state.get("won"),
        rabbitX: state.get("rabbit").get("x"),
        rabbitY: state.get("rabbit").get("y"),
        selected: state.get("selected").toArray()
    }
}

\`\`\`
`, 'rabbit');


export default Body;