import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipes from '../screens/Recipes';
import RecipeDetails from '../screens/RecipeDetails';

const Stack = createNativeStackNavigator();

export default function RecipesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipesList" component={Recipes} options={{ title: 'All Recipes' }} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details' }} />
    </Stack.Navigator>
  );
}
