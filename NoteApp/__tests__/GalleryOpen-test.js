import 'react-native';
import React from 'react';
import GalleryOpen from '../screens/GalleryOpen'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const Gallery = renderer.create(
        <GalleryOpen />
    ).toJSON();
    expect(Gallery).toMatchSnapshot();
});