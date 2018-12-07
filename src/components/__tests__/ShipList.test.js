import React from 'react'
import { ShipListItem } from '../ShipListItem'
import renderer from 'react-test-renderer';
import ships from '../../seeds/ships'

test('renders correctly', () => {
  const shipListItem = renderer.create(<ShipListItem {...ships[0]}/>).toJSON();
  expect(shipListItem).toMatchSnapshot();
});
