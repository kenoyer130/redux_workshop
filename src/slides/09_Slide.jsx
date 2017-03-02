import Slide from '../Slide';
import Logo from './images/basic.png';
import React from 'react';

const Body =  Slide (`
# Our overall architecture diagram

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