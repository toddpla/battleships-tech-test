import React from 'react'
import { connect } from 'react-redux';
import { nextPlayer, placeStrike } from '../actions/GameActions'
import Grid from './Grid'
import ShipList from './ShipList'


export class GamePage extends React.Component {

  handleStrikeSquare = square => {
    this.props.placeStrike(square)
    setTimeout(() => {
      this.props.nextPlayer()
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>Current Player: <span id="current-player-name">{this.props.current_player.name}</span></h1>
        <Grid
          title="My Ships"
          type="owner"
          grid={this.props.current_player.grid.ownerView(this.props.opponent.strikes)}
          handleSelectSquare={this.handleStrikeSquare}
          />
        <Grid
          title="My Strikes"
          type="opponent"
          grid={this.props.opponent.grid.opponentView(this.props.current_player.strikes)}
          handleSelectSquare={this.handleStrikeSquare}
          />
        <button
          onClick={this.props.nextPlayer}
          >
            Next Player
          </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
  current_player: state.game[state.game.current_player],
  opponent: state.game[state.game.opponent]
})

const mapDispatchToProps = (dispatch) => ({
  nextPlayer: () => dispatch(nextPlayer()),
  placeStrike: square => dispatch(placeStrike(square))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
