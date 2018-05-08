import 'react-native';
import React from 'react';
import StartView from '../screens/StartView'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const Start = renderer.create(
        <StartView />
    ).toJSON();
    expect(Start).toMatchSnapshot();
});