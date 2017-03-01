import React from 'react';

class Slider extends React.Component {

  componentWillMount() {
    this.props.onSlidesLoaded(this.props.children.length);
  }

  render() {
    return (
        <div>
          {this.props.children[this.props.currentIndex]}
        </div>
    );
  }
}

export default Slider;