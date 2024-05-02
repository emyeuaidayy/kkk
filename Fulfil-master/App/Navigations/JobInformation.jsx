import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import canceJob from '../Screens/ShowInformationScreen/canceJob'

import deleteJob from '../Screens/ShowInformationScreen/deleteJob'

import UserJobInforamtion from '../Screens/ShowInformationScreen/UserJobInforamtion'



const Stack = createStackNavigator();

export default function WorkerNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
          
            
            <Stack.Screen name='canceJob' component={canceJob} />
          
            <Stack.Screen name='deleteJob' component={deleteJob} />

            <Stack.Screen name='UserJobInforamtion' component={UserJobInforamtion} />

     



           
    </Stack.Navigator>
  )
}