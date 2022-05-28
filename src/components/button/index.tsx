import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';
// import { SvgCssUri } from 'react-native-svg';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

interface Props extends LinearGradientProps, TextProps, TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: object;
  children?: React.ReactElement | String;
  hitSlop?: object;
  textStyles?: object;
  wrapperStyles?: object;
  gradientColors?: Array<String>;
  gradientReverse?: boolean;
  gradientStartValues?: object;
  gradientEndValues?: object;
  outline?: boolean;
  touchStyles?: object;
}

// const baseButtonTextStyles = {
//   textAlign: 'center',
// };

export const Base = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity {...props}>
      {/* <SvgCssUri
        width="100%"
        height="100%"
        uri="http://thenewcode.com/assets/svg/accessibility.svg"
      /> */}
      <LinearGradient
        colors={['red', 'green']}
        // colors={props?.gradientColors || ['red', 'green']}
        // start={
        //   props?.gradientStartValues
        //     ? { ...props?.gradientStartValues }
        //     : { x: 0.0, y: 1.0 }
        // }
        // end={
        //   props?.gradientEndValues
        //     ? { ...props?.gradientEndValues }
        //     : { x: 1.0, y: 1.0 }
        // }
        style={{
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: props?.outline === true ? 1 : 0,
          paddingHorizontal: props?.outline === true ? 1 : 0,
          ...props?.wrapperStyles,
        }}
      >
        {typeof props.children === 'string' ? (
          <Text {...props}>{props.children}</Text>
        ) : (
          props.children
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

Base.defaultProps = {
  style: {
    width: '85%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#343434',
    borderRadius: 2,
    backgroundColor: '#e9e9e9',
  },
  gradientColors: ['red', 'yellow', 'green'],
  gradientReverse: false,
  gradientStartValues: { x: 1, y: 0 },
  gradientEndValues: { x: 1, y: 0 },
};
