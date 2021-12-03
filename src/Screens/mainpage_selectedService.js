import React , {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CurrentSelectedService, PastSelectedService} from './SelectedServices';

const MainPageSS=()=>{

    const [currentState, setCurrentState]= useState(true)
    const [pastState, setPastState]= useState(false)
    return(
    <View>
        <View style={styles.buttonView}>
        <TouchableOpacity 
        onPress={() =>{ setCurrentState(true), setPastState(false)}}
        style={currentState? styles.buttonClicked : styles.button}
      >
        <Text style={styles.buttonText}>Current</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>{setPastState(true), setCurrentState(false)}}
        style={pastState? styles.buttonClicked : styles.button}

      >
        <Text  style={styles.buttonText}>Past</Text>
      </TouchableOpacity>
        </View>
        <View>
        {pastState ? <PastSelectedService /> : <CurrentSelectedService />}   
        </View>
    </View>
        
    )
};



const styles= StyleSheet.create({
    buttonView:{
        flexDirection:'row',
        paddingBottom:10,
        backgroundColor:"white",
        width:"99%",
        justifyContent:'center',
        paddingTop:20
    },
    buttonClicked:{
        padding:8,
        borderRadius:20,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        marginLeft:40,
        marginRight:40,
    },
    button:{
        padding:8,
        borderRadius:20,
        marginLeft:40,
        marginRight:40,


    },
    buttonText:{
        textAlign:'center',
        width:100,
        fontSize:18,
        fontWeight:'bold'
    }

})

export default MainPageSS;