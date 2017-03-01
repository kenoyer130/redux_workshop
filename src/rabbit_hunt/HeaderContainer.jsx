import { connect } from 'react-redux'
import Header from './Header'

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)