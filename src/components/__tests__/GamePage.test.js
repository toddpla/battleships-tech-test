import React from 'react'
import { GamePage } from '../GamePage'
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme'
import Player from '../../models/Player'
import Ship from '../../models/Ship'
import players from '../../fixtures/players'
import ships from '../../seeds/ships'

let game = {
  player_one: new Player({...players[0], ships: ships.map(ship => new Ship({...ship}))}),
  player_two: new Player({...players[1], ships: ships.map(ship => new Ship({...ship}))}),
  current_player: 'player_one'
}

test('renders correctly', () => {
  const gamePage = renderer.create(<GamePage game={game} current_player={game.player_one} />).toJSON();
  expect(gamePage).toMatchSnapshot();
});
