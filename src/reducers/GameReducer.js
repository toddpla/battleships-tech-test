import ships from '../seeds/ships'

const gameReducerDefaultState = {};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_GAME':
      const player_one = {...action.player_one, ships}
      const player_two = {...action.player_two, ships}
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
    default:
      return state
  }
}
