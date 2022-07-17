import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
//
import {HighlightPressable} from '../highlight-pressable';

describe('Highlight Pressable render', () => {
  it('render title correctly', () => {
    const tree = renderer
      .create(
        <HighlightPressable title={'Test 1'}>
          <View style={{backgroundColor: 'green'}} />
        </HighlightPressable>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render title and event handler correctly', () => {
    const tree = renderer
      .create(
        <HighlightPressable
          title={'Test 2'}
          onPress={() => console.log('Test 2')}
        >
          <View style={{backgroundColor: 'red'}} />
        </HighlightPressable>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
