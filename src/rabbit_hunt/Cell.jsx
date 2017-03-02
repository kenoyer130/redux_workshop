import React from 'react';
import Rabbit from './rabbit.png'

class Cell extends React.Component {

  onclick = () => {
      // ignore if they already won
      if(this.props.won) {
          return;
      }

      this.props.onclick(this.props.x, this.props.y)
  }


  getIcon = () => {
        if(this.props.showRabbit) {
            return <img 
                        src={Rabbit} 
                        height={48}
                        width={48}
                        alt='rabbit' />
        }
    }

  render() {
   const style = {
       border: 'solid',
       borderCollapse: 'collapse',
       height: 50,
       width: 50,
       cursor: 'pointer',
       textAlign: 'center'
    }


    return <td 
                onClick={this.onclick}
                style={style}>
                {this.getIcon()}
                {this.props.selected ? 'X' : null}
                </td>;
  }

}

export default Cell;
