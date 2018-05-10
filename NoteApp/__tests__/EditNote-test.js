import 'react-native';
import React from 'react';
import EditHome from '../screens/EditNote'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const hello = renderer.create(
        <EditNote />
    );
});