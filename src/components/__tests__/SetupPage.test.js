import React from 'react'
import { SetupPage } from '../SetupPage'
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme'

test('renders correctly', () => {
  const setupPage = renderer.create(<SetupPage />).toJSON();
  expect(setupPage).toMatchSnapshot();
});
