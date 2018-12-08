import gameReducer from '../GameReducer'
import players from '../../fixtures/players';
import grid from '../../seeds/grid'



test('should set default state', () => {
  const state = gameReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({})
})

let player_one =  players[0]
let player_two = players[1]

test('should add players to game', () => {
  const action = {
    type: 'START_GAME',
    player_one,
    player_two
  }
  const state = gameReducer(undefined, action)
  expect(state).toEqual({
    player_one,
    player_two,
    current_player: 'player_one',
  })
})

test('should switch rotate current player', () => {
  const state = {
    player_one,
    player_two,
    current_player: 'player_one'
  }
  const expectedState = {
    player_one,
    player_two,
    current_player: 'player_two'
  }
  const action = {
    type: 'NEXT_PLAYER',
  }
  const updatedState = gameReducer(state, action)
  expect(updatedState).toEqual(expectedState)
})

test('should place a ship', () => {
  const squares = [1,2,3]
  const state = {
    player_one,
    player_two,
    current_player: 'player_one'
  }
  const action = {
    type: 'PLACE_SHIP',
    ship: 1,
    squares
  }
  const updatedState = gameReducer(state, action)
  expect(updatedState.player_one.ships[1].squares).toEqual(squares)
})
