import { View, Text } from 'react-native'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessListByCategoryScreen from '../Screens/BusinesListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false
   }}>
        <Stack.Screen name='home' component={HomeScreen} />
        
   </Stack.Navigator>
  )
}