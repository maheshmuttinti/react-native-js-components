import * as React from 'react';
import { StyleSheet, View, Text, Alert, ViewStyle } from 'react-native';
import { Button } from 'react-native-awesome-module';

const stylesObj = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
};

const App: React.FC = () => {
  return (
    <View style={stylesObj.container}>
      <Button
        onPress={() => {
          Alert.alert('Helllo there', 'Cool');
        }}
        style={styles.buttonStyles}
      >
        <Text>{`Click`}</Text>
      </Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  buttonStyles: { backgroundColor: 'red' },
});
