import React, { Component } from 'react';
import './ShipListItem.css'

export class ShipListItem extends Component {

  handleSelect = () => {this.props.handleSelect(this.props.name)}

  render() {
    return (
      <div
        id={`ship-${this.props.name}`}
        className={`ship ${this.props.selectedClass}`}
        onClick={this.handleSelect}
        >
        {this.props.name}
      </div>
    );
  }
}

export default ShipListItem;
