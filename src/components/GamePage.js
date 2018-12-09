import React from 'react'
import { connect } from 'react-redux';
import { nextPlayer } from '../actions/GameActions'
import Grid from './Grid'
import ShipList from './ShipList'


export class GamePage extends React.Component {

  render() {
    return (
      <div>
        <h1>Current Player: {this.props.current_player.name}</h1>
        <button onClick={this.props.nextPlayer} > Next Player</button>
        <ShipList ships={this.props.current_player.ships} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
  current_player: state.game[state.game.current_player],
})

const mapDispatchToProps = (dispatch) => ({
  nextPlayer: () => dispatch(nextPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
