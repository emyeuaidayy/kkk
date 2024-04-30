import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BookingJob2 from '../Screens/BookingScreen/BookingJob2'
const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
            <Stack.Screen name =  'BookingJob2' component={BookingJob2} />   
            
            <Stack.Screen name='booking' component={BookingScreen} />
          
            <Stack.Screen name='home' component={HomeScreen} />   

           
       </Stack.Navigator>
  )
}