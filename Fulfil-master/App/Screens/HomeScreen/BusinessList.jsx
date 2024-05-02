import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Heading from '../../Components/Heading';
import path from '../../Utils/Api'; // Assuming Path is correctly imported
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BusinessList() {
    const [latestJobs, setLatestJobs] = useState([]);
    const navigation = useNavigation(); // Navigation hook

    useEffect(() => {
        getLatestJob();
    }, []);

    /**
     * Get Latest Jobs from API
     */
    const getLatestJob = async () => {
        try {
            const query = `
                query {
                    getLastestJob(status: "available") {
                        price
                        jobDecription
                        customerId
                        _id
                        JobType
                        JobName
                    }
                }
            `;
            const response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch latest jobs. Server responded with status ${response.status}.`);
            }

            const json = await response.json();
            const latestJobsData = json.data.getLastestJob;

            setLatestJobs(latestJobsData);
        } catch (error) {
            console.error('Error fetching latest jobs:', error);
        }
    };

    const handleLastestJobPress = async (job) => {
        const query = `
          mutation {
            jobBookingGet(input: {
              _id: "${job._id}"
            }) {
              token
            }
          }
        `;
      
        try {
          const res = await fetch(path, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query,
            }),
          });
      
          const json = await res.json();
      
          if (!json.errors) {
            console.log('Success:', json.data.jobBookingGet);
            const token = json.data.jobBookingGet.token;
      
            const decoded = jwtDecode(token);
            console.log(decoded);
      
            // Store token in AsyncStorage
            navigation.navigate('UserJobInforamtion')
      
            // Lưu trữ token vào AsyncStorage
            await AsyncStorage.setItem('userJob', token);
          } else {
            // Handle errors from mutation
            console.error('Mutation error:', json.errors);
            // Display an error message to the user if needed
          }
        } catch (error) {
          // Handle fetch or other errors
          console.error('Error:', error);
          // Display an error message to the user if needed
        }
      };

    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                <Heading text={'Last Job List'} />
                <TouchableOpacity onPress={() => navigation.navigate('GetAllJob')}>
                    <Text style={{ fontFamily: 'outfit-medium', color: Colors.BLUE }}>View All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal contentContainerStyle={styles.latestJobsContainer}>
                {latestJobs.map((job, index) => (
                    <TouchableOpacity key={index} style={styles.latestJobItem} onPress={() => handleLastestJobPress(job)}>
                        <Text style={styles.latestJobTitle}>{job.JobName}</Text>
                        <Text style={styles.latestJobInfor}>{job.jobDecription}</Text>
                        <Text style={styles.latestJobInfor}>{job.price}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    latestJobsContainer: {
        paddingLeft: 10, // Add padding to the left to prevent the first item from sticking to the edge
    },
    latestJobItem: {
        backgroundColor: '#9D63D9',
        marginRight: 20,
        padding: 15,
        borderWidth: 0,
        borderColor: '#9f5bff',
        borderRadius: 10,
        width: 200, // Adjust the width according to your design
    },
    latestJobTitle: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 5,
        color: '#FFFFFF',
    },
    latestJobInfor: {
        color: '#FFFFFF',
    },
});
