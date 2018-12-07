import React from 'react'
import Square from './Square'

export class Grid extends React.Component {

  render() {
    let rows = [];
    for (let i=0; i < 100; i+=10) {
      rows.push(
        <tr key={i}>
        {this.props.grid.slice(i, i+10).map((square, k) => {
          return (
            <Square key={k} id={i+k} square={square} />
          )
        })}
        </tr>
      )
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Grid;

// {this.grid.map(status => <Square {status} />)}
