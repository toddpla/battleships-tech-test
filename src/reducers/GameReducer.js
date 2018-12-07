import ships from '../seeds/ships'
import grid from '../seeds/grid'

const gameReducerDefaultState = {};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_GAME':
      const player_one = {
        ...action.player_one,
        ships,
        shipsGrid: grid,
        strikesGrid: grid
      }
      const player_two = {
        ...action.player_two,
        ships,
        shipsGrid: grid,
        strikesGrid: grid
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
      player[action.ship].location = action.location;
      player[action.ship].direction = action.direction;
        return {
          ...state,
          [state.current_player]: player
        }
    default:
      return state
  }
}
