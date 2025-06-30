import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../screens/Recipes';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Recipes') {
            iconName = 'restaurant-outline';
          } else if (route.name === 'Categories') {
            iconName = 'grid-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6b6b',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 6,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Recipes" component={Recipes} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
