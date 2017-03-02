import { connect } from 'react-redux'
import Header from './Header'
import undo from './actions/UndoAction'

const mapStateToProps = (state) => {
    return {
        tries: state.get("tries"),
        max: state.get("max"),
        won: state.get("won"),
        lost: state.get("lost")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
          undo: () => {
            dispatch(undo())
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)