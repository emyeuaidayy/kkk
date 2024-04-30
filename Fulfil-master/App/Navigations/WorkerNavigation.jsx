import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WorkBoard from '../Screens/WorkBoardScreen/WorkBoard'
import GetAllJob from '../Screens/WorkBoard/GetAllJob'
import JobBooked from '../Screens/WorkBoard/JobBooked'
import JobRegistion from '../Screens/WorkBoard/JobRegistion'
import YourJob from '../Screens/WorkBoard/YourJob'

const Stack = createStackNavigator();

export default function WorkerNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
            <Stack.Screen name ='Work' component={WorkBoard} />   
            
            <Stack.Screen name='GetAllJob' component={GetAllJob} />
          
            <Stack.Screen name='JobBooked' component={JobBooked} />

            <Stack.Screen name='JobRegistion' component={JobRegistion} />

            <Stack.Screen name='YourJob' component={YourJob} />   

           
    </Stack.Navigator>
  )
}