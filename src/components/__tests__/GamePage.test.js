import React from 'react'
import { GamePage } from '../GamePage'
import renderer from 'react-test-renderer';
import players from '../../fixtures/players'
import grid from '../../seeds/grid'

let game = {
  grid
}

test('renders correctly', () => {
  const setupScreen = renderer.create(<GamePage game={game} current_player={players[0]} />).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
