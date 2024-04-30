import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Path from '../../Utils/Api'; // Assuming Path is correctly imported
const Header =  ({navigation} ) => {

    const [userId, setUserId] = useState('');
    const [userName, setName] = useState('');
  
    useEffect(() => {
        showInformation();
      }, []);
    
    
      const showInformation = async () => {
        const token = await AsyncStorage.getItem('token');
        const decoded = jwtDecode(token);
        console.log(decoded);
    
        const accountId = decoded.accountId;
        console.log(accountId);
    
        try {
            const query = `
                query {
                    getUserNamebyID(id: "${accountId}") {
                        name
                        id
                    }
                }
            `;
            const response = await fetch(Path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });
    
            const json = await response.json();
            const userName = json.data.getUserNamebyID.name;
            const userId = json.data.getUserNamebyID.id;
            setName(userName);
            setUserId(userId);
        } catch (error) {
            console.error('Error fetching name:', error);
        }
    };
    
      
      
      

  return (
    <View style={styles.container}>
      {/* Profile Section  */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={(require('../../../assets/images/Logo.png'))} 
          style={styles.userImage}/>
          <View>
            <Text style={{color:Colors.WHITE,fontFamily:'outfit'}}>Welcome,</Text>
            <Text style={{color:Colors.WHITE,
            fontSize:20,fontFamily:'outfit-medium'}}>{userName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} 
        color="white" />
      </View>
      {/* Search Bar Section  */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
        <FontAwesome name="search"
        style={styles.searchbtn}
         size={24} color={Colors.PRIMARY} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingTop:60,
    backgroundColor:Colors.PRIMARY,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },
  profileMainContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:Colors.WHITE,
    borderRadius:8,
    width:'85%',
    fontSize:16,
    fontFamily:'outfit',
    color: '#9435DF'
  },
  searchBarContainer:{
    marginTop:15,
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:10
  },
  searchbtn:{
    backgroundColor:Colors.WHITE,
    padding:10,
    borderRadius:8
  },
  userImage:{
    width:45,
    height:45,
    borderRadius:99
  }
});

export default Header;
