import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import Welcome from './slides/01_Welcome'
import Last01 from './slides/02_Last'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}> 
            <Welcome />    
            <Last01 />                
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;