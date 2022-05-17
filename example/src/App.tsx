import * as React from 'react';

import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from 'react-native-awesome-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <View style={styles.container}>
      <Button
        buttonColor={'blue'}
        onPress={() => {
          Alert.alert('Helllo there', 'Cool');
        }}
      >
        <Text>Cool</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
