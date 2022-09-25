import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProductComponent from './src/component/ProductComponent';
import ColorComponent from './src/component/ColorComponent';

export default function App() {
  return (

      <ProductComponent />
    //   <StatusBar style="auto" />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
