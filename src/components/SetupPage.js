import React from 'react'

export class SetupPage extends React.Component {
  state = {
    player_one_name: '',
    player_two_name: '',

  }

  handleInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
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

export default SetupPage;
