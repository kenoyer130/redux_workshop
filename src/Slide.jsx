import React from 'react';
import ReactMarkdown from 'react-markdown';
import Nerd from './slides/images/nerd.png'
import Rabbit from './rabbit_hunt/Rabbit'

const Slide = (markup, image) => {

return class extends React.Component {

  getImg() {
    if(image === null) {
      return null;
    } else if(image ==='nerd') {
      return <img src={Nerd} alt='nerd'  height={64} width={64} />
    }
  }

  getRabbit() {
    if(image === null) {
      return null;
    } else if(image === 'rabbit') {
      return <Rabbit />
    }
  }

  render() {
    return (
        <div>
          {this.getImg()}
          <ReactMarkdown source={markup}/>
          {this.getRabbit()}
        </div>
      )
    }
  }
}

export default Slide;