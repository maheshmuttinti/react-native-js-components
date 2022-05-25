import * as React from 'react';
import { StyleSheet, View, Alert, ViewStyle } from 'react-native';
import { Button } from 'reusable-buttons';

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
        // style={styles.buttonStyles}
      >
        Click here
      </Button>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   buttonStyles: { backgroundColor: 'blue' },
// });
