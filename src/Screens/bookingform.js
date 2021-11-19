import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DropDown from './DropDown';

const BookingForm=({navigation})=>{
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
            <DropDown />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="First Name"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Last Name"
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
            <DropDown />
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
                       
            </View>
            </ProgressStep>
            <ProgressStep label="Third Step"
             onSubmit={()=>navigation.navigate("SelectedService")}
             nextBtnStyle={styles.buttonstylenext}
             nextBtnTextStyle={styles.buttonTextStyle}
             previousBtnTextStyle={styles.buttonTextStyle}
             previousBtnStyle={styles.buttonstyleprev}
             >
             
            <View style={styles.formView}>
            <DropDown />
             <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Telephone"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Working days"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="Working Time"
            />

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
        fontSize:25,
        margin:5,
        fontWeight:'bold'
    },
    subText:{
        color:"black",
        textAlign:"center",
    },
    formView:{
        marginTop:30,
        backgroundColor:"white",
        padding:20,
        width:'90%',
        alignSelf:'center',
        borderRadius:25,
        height:350,

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
        borderRadius:20,
        padding:5,
        width:100,
        marginBottom:80,
    },
    buttonstyleprev:{
        backgroundColor:"#03204c",
        borderRadius:20,
        padding:5,
        marginBottom:80,
        width:100,
    },
    input:{
        width:"100%",
        height: 50,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft:20,
        alignSelf:'center',
        borderRadius:5
    },
    })

export default BookingForm;