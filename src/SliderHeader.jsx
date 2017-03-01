import React from 'react';

class SliderHeader extends React.Component {

    onChange = (event) => {
        this.props.onGoChange(event.target.value);
    }

    render() {
        return (
            <div>
               Slide {this.props.currentIndex + 1} of {this.props.total} 
               &nbsp;&nbsp;<input size={3} onChange={this.onChange} value={this.props.go} /> 
               <input type='button' value='GO' onClick={this.props.onGo} />
           </div>
        )
    }
}

SliderHeader.propTypes = {
    currentIndex: React.PropTypes.number,
    total: React.PropTypes.number,
};

export default SliderHeader;