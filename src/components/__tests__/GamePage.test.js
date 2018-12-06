import React from 'react'
import { mount } from 'enzyme'
import { GamePage } from '../GamePage'
import renderer from 'react-test-renderer';
import players from '../../fixtures/players'

const game = {
  player_one: players[0],
  player_two: players[1]
}

test('renders correctly', () => {
  const setupScreen = renderer.create(<GamePage game={game}/>).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
