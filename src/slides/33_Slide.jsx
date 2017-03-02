import Slide from '../Slide';

const Body = Slide(`
# Full Redux Lifecycle Example

*Assumes initial load already happened*

* First the user clicks a cell in the Presentation Component, triggering the event with the cell x,y coordinates

\`\`\`
class Cell extends React.Component {
...

    onclick = () => {
        // ignore if they already won
        if(this.props.won) {
            return;
        }

        this.props.onclick(this.props.x, this.props.y)
    }

...

\`\`\`
`, 'rabbit');


export default Body;