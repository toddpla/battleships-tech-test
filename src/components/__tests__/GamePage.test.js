import React from 'react'
import { mount } from 'enzyme'
import { GamePage } from '../GamePage'
import renderer from 'react-test-renderer';
import players from '../../fixtures/players'

test('renders correctly', () => {
  const setupScreen = renderer.create(<GamePage current_player={players[0]} />).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
