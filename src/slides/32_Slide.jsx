import React from 'react'
import Slide from '../Slide';
import Image from './images/ReactReduxWorkflow.png'

const Body = Slide(`
# Full Redux Lifecycle demostration

## Annotated Diagram

*Will have link in presentation notes*

*This is the heart of redux!*

\`\`\`
`);

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
               <img src={Image} alt='' />
            </div>
        );
    }

}

export default Wrapper;