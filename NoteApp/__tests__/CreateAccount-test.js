import 'react-native';
import React from 'react';
import CreateAccount from '../screens/CreateAccount'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const buttonTest = renderer.create(
        <CreateAccount />
    ).toJSON();
    expect(buttonTest).toMatchSnapshot();
});