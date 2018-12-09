import React from 'react'
import { connect } from 'react-redux';
import { nextPlayer, placeShip } from '../actions/GameActions'
import Grid from './Grid'
import ShipList from './ShipList'
import DirectionToggle from './DirectionToggle'
import ships from '../seeds/ships'
import { unSelectedShips } from '../selectors/ships'

export class PlaceShipPage extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.validatePlacement = this.validatePlacement.bind(this)
    this.constructGrid = this.constructGrid.bind(this)
  }

  state = {
    ship: null,
    square: null,
    direction: 'horizontal',
    squares: []
  }

  handleSelectShip = ship => this.validatePlacement('ship', ship)

  handleSelectSquare = square => this.validatePlacement('square', square)

  handleToggleDirection = () => {
    let direction = this.state.direction === 'horizontal' ? 'vertical' : 'horizontal'
    this.validatePlacement('direction', direction)
  }

  validatePlacement(parameter, value) {
    let valState = {
      ...this.state,
      [parameter]: value
    }
    let squares = [];
    if (valState.square !== null) {
      if (valState.direction === 'horizontal') {
        for(let i = 0; i < ships.find(ship => ship.name === valState.ship).size; i++) {
          squares.push(valState.square + i)
        }
      } else {
        for(let i = 0; i < ships.find(ship => ship.name === valState.ship).size; i++) {
          squares.push(valState.square + (10 * i))
        }
      }
    }
    this.props.current_player.ships.forEach(ship => {
      for (let square in squares) {
        if (ship.squares.includes(square)) {
          return false
        }
      }
    })
    this.setState({
      [parameter]: value,
      squares
    })
  }

  constructGrid() {
    const shipSquares = [].concat.apply([], this.props.current_player.ships.map(ship => ship.squares))
    const grid = []
    for (let i =0; i < 100; i++) {
      if (shipSquares.includes(i)) {
        grid.push('ship')
      } else {
        grid.push('empty')
      }
    }
    return grid
  }

  componentDidUpdate() {
    if (this.state.ship !== null && this.state.square !== null && this.state.direction !== null && this.state.squares !== null) {
      this.props.placeShip(this.state.ship, this.state.squares)
      this.setState({
        ship: null,
        square: null,
        squares: null
      })
      this.props.unSelectedShips.length === 1 && this.props.nextPlayer()
      this.forceUpdate()
      this.props.unSelectedShips.length === 0 && this.props.histoy.push('/game')
    }
  }

  render() {
    return (
      <div>
        <h1>Current Player: <span id="current-player-name">{this.props.current_player.name}</span></h1>
        <Grid
          grid={this.constructGrid()}
          title="Place Ships"
          handleSelectSquare={this.handleSelectSquare}
          selectedSquareID={this.state.square}
          />
        {(this.props.unSelectedShips.length > 0) &&
          <div>
            <DirectionToggle
              direction={this.state.direction}
              handleToggle={this.handleToggleDirection}
              />
            <ShipList
              ships={this.props.unSelectedShips}
              handleSelect={this.handleSelectShip}
              selectedShip={this.state.ship}
              />
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const current_player = state.game[state.game.current_player]
  console.log(current_player);
  return {
    game: state.game,
    current_player,
    unSelectedShips: unSelectedShips(current_player.ships)
  }
}

const mapDispatchToProps = (dispatch) => ({
  nextPlayer: () => dispatch(nextPlayer()),
  placeShip: (ship, squares) => dispatch(placeShip(ship, squares))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShipPage)
