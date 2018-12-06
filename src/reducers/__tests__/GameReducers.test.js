import gameReducer from '../GameReducer'
import players from '../../fixtures/players';

test('should set default state', () => {
  const state = gameReducer(undefined, {type: '@@INIT'})
})

test('should add players to game', () => {
  let player_one =  players[0]
  let player_two = players[1]
  const action = {
    type: 'START_GAME',
    player_one,
    player_two
  }
  const state = gameReducer(player_one, player_two)
})
