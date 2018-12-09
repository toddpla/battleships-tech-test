import gameReducer from '../GameReducer'
import Player from '../../models/Player'
import Ship from '../../models/Ship'
import ships from '../../seeds/ships'
import players from '../../fixtures/players'

test('should set default state', () => {
  const state = gameReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({current_player: 'player_one'})
})

let player_one = new Player({...players[0], ships: ships.map(ship => new Ship({...ship}))})
let player_two = new Player({...players[1], ships: ships.map(ship => new Ship({...ship}))})


test('should add players to game', () => {
  const action = {
    type: 'START_GAME',
    player_one: players[0],
    player_two: players[1]
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
    ship: 'Destroyer',
    squares
  }
  const updatedState = gameReducer(state, action)
  expect(updatedState.player_one.ships.find(ship => ship.name === 'Destroyer').squares).toEqual(squares)
})
