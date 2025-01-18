/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Product from './pages/Product';

export type RootStackParamList = {
  Home: undefined;
  Product: {
    productId: number
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Products' }} />
        <Stack.Screen name="Product" component={Product} options={{ title: 'Product' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
