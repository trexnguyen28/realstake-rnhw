import React from 'react';
import {Pressable, PressableProps} from 'react-native';

export interface RsPressableProps extends PressableProps {}

const RsPressable: React.FC<RsPressableProps> = props => {
  return <Pressable {...props} />;
};

export {RsPressable};
