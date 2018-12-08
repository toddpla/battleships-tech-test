import ships from '../seeds/ships'
// import grid from '../seeds/grid'

const gameReducerDefaultState = {};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_GAME':
      const player_one = {
        ...action.player_one,
        ships,
        strikes: []
      }
      const player_two = {
        ...action.player_two,
        ships,
        strikes: []
      }
      return {
        player_one,
        player_two,
        current_player: 'player_one'
      }
    case 'NEXT_PLAYER':
      const current_player = state.current_player === 'player_one' ? 'player_two' : 'player_one'
      return {
        ...state,
        current_player
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
