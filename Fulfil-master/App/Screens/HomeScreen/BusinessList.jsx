import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Heading from '../../Components/Heading';
import Path from '../../Utils/Api'; // Assuming Path is correctly imported
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

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
            const response = await fetch(Path, {
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

    const handleLastestJobPress = (job) => {
        // Navigate to job details screen or perform any action on job press
        console.log('Pressed job:', job);
    };

    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={'Latest Business'} isViewAll={true} />

            <ScrollView horizontal contentContainerStyle={styles.latestJobsContainer}>
                {latestJobs.map((job, index) => (
                    <TouchableOpacity key={index} style={styles.latestJobItem} onPress={() => handleLastestJobPress(job)}>
                        <Text style={styles.latestJobTitle}>{job.JobName}</Text>
                        <Text>{job.jobDecription}</Text>
                        <Text>{job.price}</Text>
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
        marginRight: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 10,
        width: 200, // Adjust the width according to your design
    },
    latestJobTitle: {
        fontSize: 16,
        fontFamily: 'outfit-medium',
        marginBottom: 5,
    },
});
