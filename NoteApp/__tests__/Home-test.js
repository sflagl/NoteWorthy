import 'react-native';
import React from 'react';
import Home from '../screens/Home'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const Home = renderer.create(
        <Home />
    ).toJSON();
    expect(Home).toMatchSnapshot();
});