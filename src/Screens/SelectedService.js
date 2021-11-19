import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const SelectedService =()=>{
    return(
        <View style={{flex: 1}}>
        <ProgressSteps
            completedProgressBarColor='#03204c'
            activeStepIconBorderColor="#03204c"
            completedProgressBarColor="#03204c"
            completedStepIconColor="#03204c"
            activeLabelColor="#03204c"
        >
        <ProgressStep label="First Step">
            <View style={{ flexDirection:'row',alignItems: 'center',alignSelf:"center" }}>
                <View>
                <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                >
                <Text style={styles.buttonText}>InProgress</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                >
                <Text style={styles.buttonText}>Finished</Text>
                 </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                 >
                <Text style={styles.buttonText}>Canceled</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
         </ProgressSteps>
        </View>
        )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:'#03204c',
        margin:15,
        padding:5,
        borderRadius:10
    },
    buttonText:{
        color:"white"
    }

})

export default SelectedService;

