import React from 'react';
import {Text,Image, TouchableOpacity,ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';
const Thankyou = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#FAF6F5', flex:1, justifyContent:"center" }}>
        <View style={{height:'100%', overflow:'hidden'}}>
       
        <View style={styles.TopView}>
        <Image
            style={styles.LOGO}
            source={require('../Assets/LOGO.jpg')}
        />
        </View>
        
        <View style={styles.bottom}>
            <Image
            style={styles.thnkuhLOGO}
            source={require('../Assets/Tick.png')}
        />
            <Text style={styles.bottomText}>Thankyou</Text>
            <Text style={styles.Subbottomtext}>We have received your response</Text>
        </View>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Orders')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Check Orders</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TopView: {
    backgroundColor:'#03204c',
    height:"70%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius:50 ,
    overflow: 'hidden',
    marginLeft:5,
    marginRight:5
  },
  LOGO:{
      width:200,
      height:100,
      alignSelf:'center',
      marginTop:"15%"
  },
  bottom:{
      backgroundColor:'white',
      height:350,
      width:'80%',
      position:'absolute',
      top:200,
      alignItems:'center',
      alignSelf:'center',
      borderRadius:20,
      padding:20,
      paddingTop:'30%'
  },
  thnkuhLOGO:{
  },
  bottomText:{
      color:'#03204c',
      fontSize:25,
      marginTop:10,
      marginBottom:10
  },
  // LOGINBUTTON
  button:{
    backgroundColor:'#03204c',
    borderRadius:20,
    padding:'3%',
    marginTop:20,
    width:'60%',
    alignSelf:'center',
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  
});
export default Thankyou;