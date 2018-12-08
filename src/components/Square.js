import React from 'react'
import './Square.css'

export class Square extends React.Component {

  handleSelect = () => {this.props.handleSelect(this.props.id)}

  render() {
    return (
      <td
        id={`square-${this.props.id}`}
        className={`square ${this.props.selectedClass}`}
        onClick={this.handleSelect}>{this.props.square}</td>
    )
  }
}

export default Square;
