import * as actions from '../GameActions';
import players from '../../fixtures/players';


describe('actions', () => {
  it('should create an action to create a game', () => {
    const player_one = players[0]
    const player_two = players[1]
    const expectedAction = {
      type: "START_GAME",
      player_one,
      player_two
    }
    expect(actions.startGame(player_one, player_two)).toEqual(expectedAction)
  })
})
