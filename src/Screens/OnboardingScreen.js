import React from 'react';
import {Text,Image, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    justifyContent: 'center',
  },
  slide3: {
    justifyContent: 'center',
  },
 
  Main_view:{
   flex:1,
   backgroundColor:'#fff'
  },
    
  //Body

  container:{
    height:300,
    justifySelf:'center',
    marginTop:"35%",
    backgroundColor:'black'
  },
  logo:{
        width:320,
        height:300,  
        alignSelf:'center' ,
        marginTop:'10%'       
    },
    nextbutton:{
        backgroundColor:'#03204c',
        margin:15, 
        padding:7, 
        borderRadius:15,
        width:50,
        flexDirection:'column',
        alignSelf:'flex-end',
        position:'absolute',
        top:260,
        color:'#fff',
        textAlign:'center'
        
    },
    donebutton:{
        borderRadius:15,
        alignSelf:'flex-end',
        position:'absolute',
        top:600,
        textAlign:'center',
        padding:10
    },
   });

const OnBoardingScreen=({navigation})=>{
    
    return(
         <View style={styles.Main_view}>
      <Swiper style={styles.wrapper} 
      loop={false}
      paginationStyle={{
      justifyContent:'flex-start',
      marginLeft:'5%',
}}
      dotStyle={{width:20,height:4, backgroundColor:'#F0F2ED'}}
      activeDotStyle={{width:20,height:4,backgroundColor:'#03204c'}}
      showsButtons={true}
      nextButton={<Text style={styles.nextbutton}>Next</Text>}
      prevButton={<Text style={styles.buttonText}></Text>}
  //     onDone={<Text style={styles.donebutton}>Donw</Text>
  //      <TouchableOpacity
  //       style={styles.barButton}
  //       onPress={()=>{navigation.navigate("Home")}}
  //     >
  //     <Text style={styles.nextbutton}>Done</Text>
  //     </TouchableOpacity>
  //  }
      >
        <View style={styles.slide1}>
        <View style={styles.container}>  
      <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
        </View>
        </View>

        <View style={styles.slide1}>
        <View style={styles.container}>  
        <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
        </View>
        </View>

      <View style={styles.slide1}>
      <View style={styles.container}>  
      <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
        </View>
        </View>
      </Swiper>
      </View>
    )
}
export default OnBoardingScreen;