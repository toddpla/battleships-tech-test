import React from 'react'
import './Square.css'

export class Square extends React.Component {

  handleSelect = () => {this.props.handleSelect(this.props.id)}

  render() {
    return (
      <td
        id={`${this.props.type}-square-${this.props.id}`}
        className={`square ${this.props.selected ? "square-selected" : "square-unselected"} square-${this.props.condition} square-${this.props.type}`}
        onClick={this.handleSelect}
        >
      </td>
    )
  }
}

export default Square;
