import React from 'react'
import { Square } from '../Square'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const setupScreen = renderer.create(<Square />).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
