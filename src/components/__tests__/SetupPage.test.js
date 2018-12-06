import React from 'react'
import { mount } from 'enzyme'
import { SetupPage } from '../SetupPage'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const setupScreen = renderer.create(<SetupPage />).toJSON();
  expect(setupScreen).toMatchSnapshot();
});

test('Fill names and submit should redirect to Game', () => {
  const setupScreen = mount(<SetupPage />)
  // setupScreen.find('#player_one_name').
})
