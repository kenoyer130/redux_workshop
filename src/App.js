import React, { Component } from 'react';
import './App.css';
import GridContainer from './rabbit_hunt/GridContainer';
import {Provider} from 'react-redux';
import store from './store'
import HeaderContainer from './rabbit_hunt/HeaderContainer'
import ToolbarContainer from './rabbit_hunt/ToolbarContainer'

class App extends Component {

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

export default App;
