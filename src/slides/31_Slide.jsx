import React from 'react'
import Slide from '../Slide';
import Image from './images/basic.png'
import Init from './images/init.gif'
import Event from './images/state.gif'

const Body = Slide(`
# Full Redux Lifecycle demostration
\`\`\`
`);

class Wrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: 'none'
        };
    }

    getImage = () => {
        const state = this.state.status;

        if(state === 'init') {
            return <img src={Init} alt='' />
        } else if(state === 'event') {
             return <img src={Event} alt='' />
        } else {
            return <img src={Image} alt='' />
        }
    }

    onStop = () => {
        this.setState({status: 'none'});
    }

     onInit = () => {
        this.setState({status: 'init'});
    }

     onEvent = () => {
        this.setState({status: 'event'});
    }

    render() {
        return (
            <div>
                <Body />
                <div>
                    <input type='button' value='Stop' onClick={this.onStop} /> 
                    <input type='button' value='Initial Load' onClick={this.onInit}  /> 
                    <input type='button' value='Component Event'  onClick={this.onEvent} /> 
                </div>
                <div>
                    {this.getImage()} 
                </div>
            </div>
        );
    }

}

export default Wrapper;