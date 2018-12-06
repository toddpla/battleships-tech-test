import ships from '../seeds/ships'

const gameReducerDefaultState = {};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        player_one: {...action.player_one, ships},
        player_two: {...action.player_two, ships}
      }
    default:
      return state
  }
}
