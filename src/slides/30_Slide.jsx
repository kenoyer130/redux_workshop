import Slide from '../Slide';

const Body = Slide(`
# Connected Containers

## mapDispatchToProps

* Sets callbacks for your React Component events to dispatch Actions 
\`\`\`
import cellSelected from './actions/CellSelectedAction'

...

const mapDispatchToProps = (dispatch) => {
    return {
        onCellClick: (x, y) => {
            dispatch(cellSelected(x, y))
        }
    }
}
...

// wrapped React Presentational Component
class Point extends React.Component {
    render() {
        return (
            <input type='button' value='you rock' onClick={this.props.onCellClick(3,3)} />
        )
    }
}

\`\`\`
`);

export default Body;