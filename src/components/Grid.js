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
            <Square
              key={k}
              id={i+k}
              square={square}
              type={this.props.type}
              handleSelect={this.props.handleSelectSquare}
              selected={(i+k) == this.props.selectedSquareID}
              condition={square}
              />
          )
        })}
        </tr>
      )
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Grid;

// {this.grid.map(status => <Square {status} />)}
