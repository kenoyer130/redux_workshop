import Slide from '../Slide';

const Body = Slide(`
# Connected Containers

## mapStateToProps

* is passed the current state and then returns the
 props to set on the wrapped presentational component   

 * is how the store data is pushed into your React components
\`\`\`

...
const mapStateToProps = (state) => {
    return {
       x: state.x,
       y: state.y
    }
...

// wrapped React Presentational Component
class Point extends React.Component {
    render() {
        return (
            <div>point: {this.props.x}, {this.props.y} </div>
        )
    }
}

\`\`\`
`);

export default Body;