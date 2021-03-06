import ships from '../seeds/ships'
import Ship from '../models/Ship'
import Player from '../models/Player'

const gameReducerDefaultState = {current_player: 'player_one', opponent: 'player_two'};

export default (state = gameReducerDefaultState, action) => {

  const player = state[state.current_player]

  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        player_one: new Player({...action.player_one, ships: ships.map(ship => new Ship({...ship}))}),
        player_two: new Player({...action.player_two, ships: ships.map(ship => new Ship({...ship}))})
      }
    case 'NEXT_PLAYER':
      return {
        ...state,
        current_player: state.opponent,
        opponent: state.current_player
      }
    case 'PLACE_SHIP':
      player.ships.find(ship => ship.name === action.ship).squares = action.squares
      return {
        ...state,
        [state.current_player]: player
      }
    case 'PLACE_STRIKE':
      player.strikes.push(action.square)
      return {
        ...state,
        [state.current_player]: player
      }
    default:
      return state
  }
}
