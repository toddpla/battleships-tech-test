import React from 'react'
import { Grid } from '../Grid'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const setupScreen = renderer.create(<Grid grid={new Array(100).fill(undefined)}/>).toJSON();
  expect(setupScreen).toMatchSnapshot();
});
