import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BookingJob2 from '../Screens/BookingScreen/BookingJob2'
import BookingJob from '../Screens/BookingScreen/BookingJob'
const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
            <Stack.Screen name =  'BookingJob2' component={BookingJob2} />   
          
            <Stack.Screen name='home' component={HomeScreen} />   

            <Stack.Screen name='BookingJob' component={BookingJob} />   

           
       </Stack.Navigator>
  )
}