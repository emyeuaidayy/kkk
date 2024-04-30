import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import WorkerNavigation from '../Navigations/WorkerNavigation';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {

  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
       <Tab.Screen name='home' component={HomeScreen}
       options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>
                Home</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={size} color={color} />
        )
       }}
       /> 
       <Tab.Screen name='Booked' component={BookingScreen} 
       options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>
                Booking</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome name="cart-plus" size={size} color={color} />
        )
       }}/> 
       <Tab.Screen name='Work' component={WorkerNavigation} 
       options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>
                WorkBoard</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome name="clipboard" size={size} color={color} />
        )
       }}/> 
    </Tab.Navigator>
  )
}