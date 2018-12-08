import React from 'react'
import { GamePage } from '../GamePage'
import renderer from 'react-test-renderer';
import players from '../../fixtures/players'
import grid from '../../seeds/grid'
import {shallow} from 'enzyme'

let game = {
  grid
}

test('renders correctly', () => {
  const gamePage = renderer.create(<GamePage game={game} current_player={players[0]} />).toJSON();
  expect(gamePage).toMatchSnapshot();
});
