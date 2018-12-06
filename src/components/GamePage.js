import React from 'react'
import { connect } from 'react-redux';


export class GamePage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Player 1: {this.props.game.player_one.name}</h1>
        <h1>Player 2: {this.props.game.player_two.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  game: state.game
})

export default connect(mapStateToProps)(GamePage)
