import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Time from './Time';

const BookingForm=(props)=>{
    const [text, onChangeText] = useState();
    return(
        <View style={styles.Main_view}>
            <View>
                <Text style={styles.HeaderText}>Book Services</Text>
                <Text style={styles.subText}>Fill all form field to move on next step</Text>
            </View>
            <View style={{flex: 1}}>
            <ProgressSteps 
            completedProgressBarColor='#03204c'
            activeStepIconBorderColor="#03204c"
            completedProgressBarColor="#03204c"
            completedStepIconColor="#03204c"
            activeLabelColor="#03204c"
            >
            <ProgressStep label="First Step"
             nextBtnStyle={styles.buttonstylenext}
             nextBtnTextStyle={styles.buttonTextStyle}
             previousBtnTextStyle={styles.buttonTextStyle}>
             
            <View style={styles.formView}>
            <Text style={styles.formHeaderText}>Nannies service</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="First Name"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Gender"
            />
            
            </View>
            </ProgressStep>
            <ProgressStep label="Second Step"
             nextBtnStyle={styles.buttonstylenext}
             nextBtnTextStyle={styles.buttonTextStyle}
             previousBtnTextStyle={styles.buttonTextStyle}
             previousBtnStyle={styles.buttonstyleprev}
            >
             
            <View style={styles.formView}>
            <Text style={styles.formHeaderText}>Nannies service</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Address"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="City"
            />
             <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Email"
            />
             <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Telephone"
            />
            
            </View>
            </ProgressStep>
            <ProgressStep label="Third Step"
             nextBtnStyle={styles.buttonstylenext}
             nextBtnTextStyle={styles.buttonTextStyle}
             previousBtnTextStyle={styles.buttonTextStyle}
             previousBtnStyle={styles.buttonstyleprev}
             >
             
            <View style={styles.formView}>
            <Text style={styles.formHeaderText}>Nannies service</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Working days"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            />
            <Time />
            
            
            </View>
            </ProgressStep>
        </ProgressSteps>
        </View>
        </View>
    );
};

const styles=StyleSheet.create({
    Main_view:{
        alignSelf:'center',
        marginTop:20
    },
    HeaderText:{
        color:"black",
        textAlign:"center",
        fontSize:20,
        margin:5,
        fontWeight:'bold'
    },
    subText:{
        color:"black",
        textAlign:"center",
    },
    formView:{
        marginTop:30,
    },
    formHeaderText:{
        fontSize:28,
        color:"#03204c",
        marginBottom:25

    },
    buttonTextStyle:{
        color:"#fff",
        textAlign:'center'
    },
    buttonstylenext:{
        backgroundColor:"#03204c",
        borderRadius:25,
        padding:5,
        width:80
    },
    buttonstyleprev:{
        backgroundColor:"#03204c",
        borderRadius:25,
        padding:5,
    },


    input:{
        width:250,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft:20,
        alignSelf:'center'
    },
    })

export default BookingForm;