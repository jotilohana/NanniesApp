import React from 'react';
import {Text,Image, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
   marginBottom:30,
    height:250,
    width: '100%',
    padding:0
  },
  imageView:{
    // flex:1,
    width: wp('100%'),
    height:250
  },
  image:{
      flex:1,
      resizeMode:'contain',
      height:'100%', 
      width:'100%'
  },
  //header
  Nav:{
    margin:'5%',
    position:'absolute',
    top:'0%',
  },
  tinyLogo:{
    width:'70%',
    height:20,
    
  },
  
});

const Home_swiper=({navigation})=>{

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
        <View style={styles.imageView}>
        <Image
        source={require('../Assets/homeslider/Image1.png')}
        style={styles.image}  
      />
        </View>  
      <TouchableOpacity
      style={styles.Nav}
      // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer());}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>

        </View>
        </View>

        <View style={styles.slide1}>
        <View style={styles.container}>
        <Image
        source={require('../Assets/homeslider/Image2.png')}
        style={styles.image}    
      />
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>
        </View>
        </View>

      <View style={styles.slide1}>
      <View style={styles.container}>
       <Image
        source={require('../Assets/homeslider/Image3.png')}
        style={styles.image}    
      />         
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      </TouchableOpacity>
        </View>
        </View>
      </Swiper>
      </View>
    )
}
export default Home_swiper;