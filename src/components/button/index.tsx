import React from 'react';
import { TouchableOpacity } from 'react-native';

export const Base = ({
  onPress = () => {},
  disabled = false,
  buttonStyles = { borderRadius: 5, backgroundColor: 'cyan', padding: 10 },
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonStyles,
      }}
      onPress={() => onPress()}
      disabled={disabled}
    >
      {props.children}
    </TouchableOpacity>
  );
};
