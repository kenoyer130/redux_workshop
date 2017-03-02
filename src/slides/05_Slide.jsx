import React from 'react';
import Slide from '../Slide';
import Logo from './images/redux.png';

const Body =  Slide (`
# Enter React-Redux!
*Note we will call it Redux from now on, but remember Redux does not need to be used with React, it can be used with any view packages.*

Redux is designed to manage State for your application.

It consists of the following parts

* The Store
* The Reducers
* The Actions

Don't worry we will go over all of them!

`); 

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <Body />
                <img src={Logo} alt='' />
            </div>
        );
    }
}    

export default Wrapper;