import { connect } from 'react-redux'
import Grid from './Grid'
import cellSelected from './actions/CellSelectedAction'

const mapStateToProps = (state) => {
    return {
        size: state.get("size"),
        won: state.get("won"),
        rabbitX: state.get("rabbit").get("x"),
        rabbitY: state.get("rabbit").get("y"),
        selected: state.get("selected").toArray()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         onCellClick: (x, y) => {
            dispatch(cellSelected(x, y))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)