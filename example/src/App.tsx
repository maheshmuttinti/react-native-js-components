import * as React from 'react';
import { Alert, Text, TextProps } from 'react-native';
import { Button } from 'reusable-buttons';

interface Props extends TextProps {
  children?: React.ReactNode | String;
}

const App: React.FC = (props: Props) => {
  return (
    <Button
      onPress={() => {
        Alert.alert('Helllo there', 'Cool');
      }}
      colors={['red', 'green']}
    >
      <Text
        {...props}
      >{`Click here jhsdbfhjd jhdfgjh jsdhfh uhdsfuy uhdsfu`}</Text>
    </Button>
  );
};

export default App;

// const styles = StyleSheet.create({
//   buttonStyles: { backgroundColor: 'blue' },
// });
