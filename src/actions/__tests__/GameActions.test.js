import * as actions from '../GameActions';
import players from '../../fixtures/players';


describe('actions', () => {

  const player_one = players[0]
  const player_two = players[1]

  it('should create an action to create a game', () => {
    const player_one = players[0]
    const player_two = players[1]
    const expectedAction = {
      type: "START_GAME",
      player_one,
      player_two,
    }
    expect(actions.startGame(player_one, player_two)).toEqual(expectedAction)
  })
  it('should create an action to rotate current user', () => {
    const expectedAction = {
      type: "NEXT_PLAYER"
    }
    expect(actions.nextPlayer()).toEqual(expectedAction)
  })
  it('should create an action to place the current players slected ship', () => {
    const expectedAction = {
      type: "PLACE_SHIP",
      ship: 'Carrier',
      squares: [1,2,3,4]
    }
    expect(actions.placeShip("Carrier", [1,2,3,4])).toEqual(expectedAction)
  })

})
