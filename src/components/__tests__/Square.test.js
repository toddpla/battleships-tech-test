import React from 'react'
import { Square } from '../Square'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const square = renderer.create(<Square />).toJSON();
  expect(square).toMatchSnapshot();
});
