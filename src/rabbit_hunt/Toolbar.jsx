import React from 'react';

class Toolbar extends React.Component {

  render() {
    return (
        <div>
        { (this.props.won || this.props.lost) ?
            <input type='button' value='Try Again!' onClick={this.props.onClick} /> :
             null
        }
        </div>
    );
  }
}

export default Toolbar;
