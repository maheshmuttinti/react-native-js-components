import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: object;
  children?: React.ReactNode | String;
  hitSlop?: object;
}

export const Base = (props: Props) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
