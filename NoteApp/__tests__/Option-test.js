import 'react-native';
import React from 'react';
import Option from '../screens/Option'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const Option = renderer.create(
        <Option />
    ).toJSON();
    expect(Option).toMatchSnapshot();
});

