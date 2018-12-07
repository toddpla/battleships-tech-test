import React from 'react'
import { connect } from 'react-redux'
import { startGame } from '../actions/GameActions'

export class SetupPage extends React.Component {
  state = {
    player_one_name: '',
    player_two_name: '',

  }

  handleInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const player_one = {name: this.state.player_one_name}
    const player_two = {name: this.state.player_two_name}
    this.props.startGame(player_one, player_two)
    this.props.history.push('/game')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="player_one_name">Player One Name</label>
        <input id="player_one_name" type="text" onChange={this.handleInputChange} />
        <label htmlFor="player_two_name">Player Two Name</label>
        <input id="player_two_name" type="text" onChange={this.handleInputChange} />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGame: (player_one, player_two) => dispatch(startGame(player_one, player_two))
})


export default connect(undefined, mapDispatchToProps)(SetupPage);
