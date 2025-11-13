import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ManageMenuScreen } from './src/screens/ManageMenuScreen';
import { FilterScreen } from './src/screens/FilterScreen';
import { DishDetailsScreen } from './src/screens/DishDetailsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type RootStackParamList = {
  Home: undefined;
  ManageMenu: undefined;
  Filter: undefined;
  DishDetails: { dish: any };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Menu' }}
          />
          <Stack.Screen
            name="ManageMenu"
            component={ManageMenuScreen}
            options={{ title: 'Manage Menu' }}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{ title: 'Guest Filter' }}
          />
          <Stack.Screen
            name="DishDetails"
            component={DishDetailsScreen}
            options={{ title: 'Dish Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
