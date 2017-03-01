import { connect } from 'react-redux'
import Toolbar from './Toolbar'
import resetSelected from '../ResetSelectedAction'

const mapStateToProps = (state) => {
    return {
        won: state.get("won"),
        lost: state.get("lost")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         onClick: () => {
            dispatch(resetSelected())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)