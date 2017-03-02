import Slide from '../Slide';

const Body = Slide(`
# Full Redux Lifecycle Example

* Next the Container picks the event up and dispatches the action with the needed arguments 

\`\`\`

...
import cellSelected from './actions/CellSelectedAction'

const mapDispatchToProps = (dispatch) => {
    return {
         onCellClick: (x, y) => {
            dispatch(cellSelected(x, y))
        }
    }
}

..

\`\`\`
`);


export default Body;