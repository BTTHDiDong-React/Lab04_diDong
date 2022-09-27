import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductComponent from './src/component/ProductComponent';
import ColorComponent from './src/component/ColorComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    //   <ProductComponent />
    //   <ColorComponent />
    //   <StatusBar style="auto" />
    <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductComponent" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ProductComponent" component={ProductComponent} />
                <Stack.Screen name="ColorComponent" component={ColorComponent} />
                
            </Stack.Navigator>
        </NavigationContainer>

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
