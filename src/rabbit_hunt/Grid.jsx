import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
  
 onCellClick = (x, y) => {
     this.props.onCellClick(x,y);
 }

  getGrid() {

      let grid = [];

      for(let i = 0; i < this.props.size; i++) {
          grid.push(
              <tr key={'' + i}>{
               this.getCells(i)
              }</tr>
          );
      }

      return grid;
  }

  getCells(row) {

      let rows = [];

      for(let i =0; i < this.props.size; i++) {

          const showRabbit = ((row === this.props.rabbitX && i === this.props.rabbitY) &&
                                (this.props.won || this.props.lost));   


          const selected = (!showRabbit 
                && (this.props.selected && this.props.selected.includes((row * 10) + i)));                      

          rows.push(
              <Cell  key={'' + row + i} 
                x={row}
                y={i}
                selected={selected}
                won={this.props.won}
                showRabbit={showRabbit}
                onclick={this.onCellClick}
              />
          );
      }

      return rows;
  }

  render() {

   const style = {
       border: 'solid',
       borderCollapse: 'collapse'

   }

    return (
        <table style={style}>
            <tbody>
                {this.getGrid()}
            </tbody>
        </table>
    );
  }
}

export default Grid;
