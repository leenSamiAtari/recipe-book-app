import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './navigation/BottomTabs';
import RecipeDetails from './screens/RecipeDetails';
import { FavoritesProvider } from './context/FavoritesContext';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <FavoritesProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
         name="Welcome"
         component={Welcome}
         options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{ title: 'Recipe Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesProvider>
  );
}
