import React, { Component } from 'react';

export class DirectionToggle extends Component {

  render() {
    return (
      <span
        id="direction-toggle"
        onClick={this.props.handleToggle}
        >
          {this.props.direction}
      </span>
    );
  }
}

export default DirectionToggle;
