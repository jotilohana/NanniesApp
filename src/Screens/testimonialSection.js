import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: {},
  mainText:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      margin:10
  },
  slide1: {
    flex: 1,
    backgroundColor:'#fff',

  },
  slide2: {
    flex: 1,
    backgroundColor:'#fff',
  },
  slide3: {
    flex: 1,
    backgroundColor:'#fff',
  },
  imageView:{
      backgroundColor:'#03204c',
      height:80,
      width:80,
      borderRadius:50,
      alignSelf:'center',
      marginTop:10
  },
  Image:{
    width:'60%',
    height:'60%',
    borderRadius:50,
    alignSelf:'center',
    marginTop:13
    
  },
  headerText:{
    color:"black",
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 18,
    
  },
  apos:{
      justifyContent:'flex-start',
      margin:2,
      marginLeft:20,
  },
  text: {
    color: 'black',
    fontSize: 13,
    padding:15
  },
  aposRight:{
    marginLeft:'auto',
    margin:20,
    marginTop:0,
    justifyContent:'flex-end',


  },
})
const TestimonialSection=()=> {
  
    return (
    <View style={styles.mainView}>
    <Text style={styles.mainText}>Testimonial</Text>
    <View style={{backgroundColor:"#03204c",margin:10,borderRadius:25,padding:10}}>
    <View style={{width:'80%', backgroundColor:'white',height:300,alignSelf:'center', borderRadius:5, overflow:'hidden',margin:10 }}>
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
         <Image style={styles.apos} source={require("../Assets/Apos.png")} />
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
         <Image style={styles.aposRight} source={require("../Assets/Apos.png")} />
        </View>



        <View style={styles.slide2}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
         <Text style={styles.headerText}>Hello World2</Text>
         <Image style={styles.apos} source={require("../Assets/Apos.png")} />
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
         <Image style={styles.aposRight} source={require("../Assets/Apos.png")} />
        </View>

        <View style={styles.slide3}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
         <Text style={styles.headerText}>Hello World3</Text>
         <Image style={styles.apos} source={require("../Assets/Apos.png")} />
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
         <Image style={styles.aposRight} source={require("../Assets/Apos.png")} />
        </View>
      </Swiper>
      </View>
      </View>
      </View>
    )
  
};
 
export default TestimonialSection;