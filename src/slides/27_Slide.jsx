import React from 'react'
import Slide from '../Slide';
import Image from './images/containers.png'

const Body = Slide(`
# Connector Containers
* In our compenent hierachy we have Containers that want to listen to and send actions to the Store
`, 'containers');

class wrapper extends React.Component {
    render() {
        return (
            <div>
                <Body />
               <img src={Image} alt='Image' />
            </div>
        )
    }
}

export default wrapper;