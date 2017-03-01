import React from 'react';
import GridContainer from './GridContainer';
import {Provider} from 'react-redux';
import store from './store'
import HeaderContainer from './HeaderContainer';
import ToolbarContainer from './ToolbarContainer';

class Rabbit extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <HeaderContainer />
                    <GridContainer />
                    <ToolbarContainer />
                </div>
            </Provider>
        );
    }
}

export default Rabbit;
