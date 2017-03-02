import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import Slide01 from './slides/01_Slide'
import Slide99 from './slides/99_Slide'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}>              
          <Slide01 />
          <Slide99 />
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;