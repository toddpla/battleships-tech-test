import ships from '../seeds/ships'
import Ship from '../models/ship'
import Player from '../models/player'

const gameReducerDefaultState = {current_player: 'player_one'};

export default (state = gameReducerDefaultState, action) => {
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
        current_player: state.current_player === 'player_one' ? 'player_two' : 'player_one'
      }
    case 'PLACE_SHIP':
      const player = state[state.current_player]
      player.ships.find(ship => ship.name === action.ship).squares = action.squares
      return {
        ...state,
        [state.current_player]: player
      }
    default:
      return state
  }
}
