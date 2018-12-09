import React from 'react'
import ShipListItem from './ShipListItem'

export class ShipList extends React.Component {

  render() {
    return (
      <div className="ship-list">
        <h1>Ships</h1>
        <article>
          {this.props.ships.map((ship, i) => (
            <ShipListItem
              key={i}
              index={i}
              selected={ship.name == this.props.selectedShip}
              handleSelect={this.props.handleSelect}
              {...ship}
              />
          ))}
        </article>
      </div>
    )
  }
}

export default ShipList
