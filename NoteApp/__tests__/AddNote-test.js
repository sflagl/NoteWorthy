import 'react-native';
import React from 'react';
import AddNote from '../screens/AddNote'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const hello = renderer.create(
        <AddNote />
    );
});