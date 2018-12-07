import React from 'react'
import { ShipList } from '../ShipList'
import renderer from 'react-test-renderer';
import ships from '../../seeds/ships'

test('renders correctly', () => {
  const shipList = renderer.create(<ShipList ships={ships}/>).toJSON();
  expect(shipList).toMatchSnapshot();
});
