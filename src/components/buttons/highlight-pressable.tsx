import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {fontStyles} from '@themes';
import {useAppTheme} from '@hooks';
//
import {RsPressableProps} from './rs-pressable';

const styles = StyleSheet.create({
  title: {
    ...fontStyles.Body,
    textDecorationLine: 'underline',
  },
});

interface HighlightPressableProps extends RsPressableProps {
  title: string;
}

const HighlightPressable: React.FC<HighlightPressableProps> = ({
  title,
  ...restProps
}) => {
  const {colors} = useAppTheme();

  return (
    <Pressable {...restProps}>
      <Text style={[styles.title, {color: colors.highlight}]}>{title}</Text>
    </Pressable>
  );
};

export {HighlightPressable};
