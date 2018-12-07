import React from 'react'
import { SetupPage } from '../SetupPage'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const setupScreen = renderer.create(<SetupPage />).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
