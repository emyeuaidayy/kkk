import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WorkBoard from '../Screens/WorkBoardScreen/WorkBoard'
import GetAllJob from '../Screens/WorkBoard/GetAllJob'
import JobBooked from '../Screens/WorkBoard/JobBooked'
import JobRegistion from '../Screens/WorkBoard/JobRegistion'
import YourJob from '../Screens/WorkBoard/YourJob'
import YourJobBooked from '../Screens/WorkBoard/YourJobBooked'

import canceJob from '../Screens/ShowInformationScreen/canceJob'

import deleteJob from '../Screens/ShowInformationScreen/deleteJob'

import UserJobInforamtion from '../Screens/ShowInformationScreen/UserJobInforamtion'


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

            <Stack.Screen name='YourJobBooked' component={YourJobBooked} />   

            <Stack.Screen name='canceJob' component={canceJob} />
          
          <Stack.Screen name='deleteJob' component={deleteJob} />

          <Stack.Screen name='UserJobInforamtion' component={UserJobInforamtion} />



           
    </Stack.Navigator>
  )
}