import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import Slide01 from './slides/01_Slide'
import Slide02 from './slides/02_Slide'
import Slide03 from './slides/03_Slide'
import Slide04 from './slides/04_Slide'
import Slide05 from './slides/05_Slide'
import Slide06 from './slides/06_Slide'
import Slide07 from './slides/07_Slide'
import Slide08 from './slides/08_Slide'
import Slide09 from './slides/09_Slide'
import Slide10 from './slides/10_Slide'
import Slide11 from './slides/11_Slide'
import Slide12 from './slides/12_Slide'
import Slide13 from './slides/13_Slide'
import Slide14 from './slides/14_Slide'
import Slide15 from './slides/15_Slide'
import Slide16 from './slides/16_Slide'
import Slide17 from './slides/17_Slide'
import Slide18 from './slides/18_Slide'
import Slide19 from './slides/19_Slide'
import Slide20 from './slides/20_Slide'
import Slide21 from './slides/21_Slide'
import Slide22 from './slides/22_Slide'
import Slide23 from './slides/23_Slide'
import Slide24 from './slides/24_Slide'
import Slide25 from './slides/25_Slide'
import Slide26 from './slides/26_Slide'
import Slide27 from './slides/27_Slide'
import Slide28 from './slides/28_Slide'
import Slide29 from './slides/29_Slide'
import Slide30 from './slides/30_Slide'
import Slide31 from './slides/31_Slide'
import Slide32 from './slides/32_Slide'
import Slide33 from './slides/33_Slide'
import Slide34 from './slides/34_Slide'
import Slide35 from './slides/35_Slide'
import Slide36 from './slides/36_Slide'
import Slide37 from './slides/37_Slide'
import Slide38 from './slides/38_Slide'
import Slide39 from './slides/39_Slide'
import Slide40 from './slides/40_Slide'
import Slide401 from './slides/40_Slide1'
import Slide41 from './slides/41_Slide'
import Slide42 from './slides/42_Slide'
import Slide43 from './slides/43_Slide'
import Slide44 from './slides/44_Slide'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}>              
          <Slide01 />
          <Slide02 />
          <Slide03 />
          <Slide04 />
          <Slide05 />
          <Slide06 />
          <Slide07 />
          <Slide08 />
          <Slide09 />
          <Slide10 />
          <Slide11 />
          <Slide12 />
          <Slide13 />
          <Slide14 />
          <Slide15 />
          <Slide16 />
          <Slide17 />
          <Slide18 />
          <Slide19 />
          <Slide20 />
          <Slide21 />
          <Slide22 />
          <Slide23 />
          <Slide24 />
          <Slide25 />
          <Slide26 />
          <Slide27 />
          <Slide28 />
          <Slide29 />
          <Slide30 />
          <Slide31 />
          <Slide32 />
          <Slide33 />
          <Slide34 />
          <Slide35 />
          <Slide36 />
          <Slide37 />
          <Slide38 />
          <Slide39 />
          <Slide40 />
          <Slide401 />
          <Slide41 />
          <Slide42 />
          <Slide43 />
          <Slide44 />
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;