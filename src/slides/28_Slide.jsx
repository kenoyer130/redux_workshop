import Slide from '../Slide';

const Body = Slide(`
# Connected Containers
* Are HOC wrappers around your presentational Component
* Consist of three main parts
    * mapStateToProps
    * mapDispathToProps
    * connect
* You want lots of small flat Connectors, not parent level Containers with lots of children.

\`\`\`
import { connect } from 'react-redux'
import MyComponent from './MyComponent'

const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
\`\`\`
`);

export default Body;