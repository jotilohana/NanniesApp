import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
  },
  mainText:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      margin:10
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  imageView:{
      backgroundColor:'#03204c',
      alignSelf:'center',
      width:100,
      height:100,
      // position:'absolute',
      // bottom:250,
      // zIndex:999,
      // elevation:999,
  },
  Image:{
    width:"90%",
    height:"90%",
    borderRadius:50,
    borderWidth:4,
    borderColor:'#03204c',
    alignSelf:'center',
  },
  headerText:{
    color:"white",
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 18,
    
  },
  apos:{
      marginLeft:20,
      fontSize:30,
      color:'white',
  },
  text: {
    color: 'white',
    fontSize: 13,
    padding:15,
    paddingTop:0

  },
  aposRight:{
    marginLeft:'auto',
    marginRight:20,
    fontSize:30,
    color:'white',
  },
})
const TestimonialSection=()=> {
  
    return (
    <View>
    <View style={{width:'90%',backgroundColor:'#03204c',height:300,alignSelf:'center', borderRadius:25 }}>
      <Swiper style={styles.wrapper} 
      showsButtons={false}
      loop={false}
      dotColor={{color:'#fff'}}
      activeDotColor={{color:'#fff'}}

      >
        <View style={styles.slide1}>
        <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
         <Text style={styles.headerText}>Hello World</Text>
         {/* <Image style={styles.apos} source={require("../Assets/Apos.png")} /> */}
         <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
        <Text style={styles.aposRight}>❝</Text>
        </View>



        <View style={styles.slide2}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
         <Text style={styles.headerText}>Hello World2</Text>
        <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
          <Text style={styles.aposRight}>❝</Text>
        </View>

        <View style={styles.slide3}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
         <Text style={styles.headerText}>Hello World3</Text>
         <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
        <Text style={styles.aposRight}>❝</Text>
        </View>
      </Swiper>
      </View>
      </View>
    )
  
};
 
export default TestimonialSection;