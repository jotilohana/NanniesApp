import React from 'react';
import {Text,Image, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
  flex: 1,
  },
  slide3: {
    flex: 1,
  },
  container:{
    flex:1,
  },
  Main_view:{
   height:250,
   marginBottom:30,
   backgroundColor:'red'
  },
  image:{
      flex:1,
      // width:'100%',
      // height:'100%',
      resizeMode:"stretch"
  },
  //header
  Nav:{
    margin:'5%',
  },
  tinyLogo:{
    width:'8%',
    height:20,
  },
  
});

const Home_swiper=()=>{
    return(
         <View style={styles.Main_view}>
      <Swiper style={styles.wrapper} 
      loop={false}
      showsButtons={false}
      dotStyle={{width:20,height:4, backgroundColor:'grey'}}
      activeDotStyle={{width:20,height:4,backgroundColor:'#03204c'}}
      paginationStyle={{
        justifyContent:"flex-start",
        marginLeft:'3%'
        }}
      >
        <View style={styles.slide1}>
        <View style={styles.container}>
    <ImageBackground source={require('../Assets/homeslider/Image1.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>
    </ImageBackground>
        </View>
        </View>

        <View style={styles.slide1}>
        <View style={styles.container}>
    <ImageBackground source={require('../Assets/homeslider/Image2.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>
    </ImageBackground>
        </View>
        </View>

      <View style={styles.slide1}>
      <View style={styles.container}>
    <ImageBackground source={require('../Assets/homeslider/Image3.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>
    </ImageBackground>
        </View>
        </View>
      </Swiper>
      </View>
    )
}
export default Home_swiper;