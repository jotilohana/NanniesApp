import React from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native';

const EditProfile=()=>{
    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.ImageView}>
                <Image
                style={styles.profilePicture}
                source={require('../Assets/profile2.jpg')}
                />
                </View>
                <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Jklohana</Text>
                </View>
            </View>


            <View style={styles.mainView}>
                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/User.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Full Name</Text>
                <Text style={styles.input}>Jklohana</Text>
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Email</Text>
                <Text style={styles.input}> jklohanaa@gmail.com</Text>
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Phone Number</Text>
                <Text style={styles.input}>0333-8365474</Text>
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Address</Text>
                <Text style={styles.input}>Filler text is text that shares</Text>
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>City</Text>
                <Text style={styles.input}>Karachi</Text>
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Gender</Text>
                <Text style={styles.input}>Female</Text>
                </View>
                </View>

                
            </View>
            
                <TouchableOpacity
                            style={styles.EditButton}
                        >
                        <Text style={styles.EditText}>Edit Profile</Text>
                        </TouchableOpacity>
        </View>
    )
};

const styles= StyleSheet.create({
    header:{
        backgroundColor:"#b4cce4",
        height:100,
        padding:2,
        flexDirection:'row'
    },
    ImageView:{
        height:70,
        borderRadius:50,
        marginTop:45,
        marginLeft:10,
        width:75
    },
    profilePicture:{
        height:90,
        borderRadius:50,
        width:90
    },
    headerTextView:{
        marginTop:60,
        marginLeft:30
    },
    headerText:{
        color:'#03204c',
        fontSize:18,
        fontWeight:'bold'
    },
    mainView:{
    marginTop:50
    },
    InputFieldView:{
        margin:20,
        marginTop:0,
        alignSelf:'center',
        backgroundColor:"#ffffff",
        width:'80%',
        flexDirection:'row',
        borderRadius:10,
        paddingLeft:20,
        overflow:"hidden",
        padding:5,
        elevation:5
    },
    inputTextView:{
        marginLeft:20,
    },
    InputIcon:{
        marginTop:16
    },
    input:{
        padding:0,
        fontSize:16,
        fontWeight:'bold'
    },
    inputText:{
        margin:0,
        marginTop:5,
        padding:0
    },
    
    EditButton:{
        margin:10,
        backgroundColor:'#03204c',
        borderRadius:20,
        marginTop:'auto',
        width:'80%',
        alignSelf:'center',
    },
    EditText:{
        color:'white',
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
})
export default EditProfile;