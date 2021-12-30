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
 
  slide4: {
    flex: 1,
  },
 
  slide5: {
    flex: 1,
  },
 
  Main_view:{
   flex:1,
   backgroundColor:'#fff'
  },
    
  //Body

  container:{
    flex:1,
    justifySelf:'center',
    marginTop:"15%",
  },
  logo:{
        width:320,
        height:300,  
        alignSelf:'center' ,
        marginTop:'10%'       
    },
    nextbutton:{
        backgroundColor:'#03204c',
        margin:10, 
        marginRight:10,
        padding:5, 
        borderRadius:15,
        width:50,
        marginTop:450,
        color:'#fff',
        textAlign:'center',
    },
    donebutton:{
        borderRadius:20,
        textAlign:'center',
        padding:7,
        backgroundColor:'#03204c',
        marginTop:'auto',
        width:'15%',
        marginLeft:'auto',
        margin:10,
        marginBottom:20

    },
    donebuttontext:{
      color:'white',
      textAlign:'center'
    }
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
      nextButton={ <Text style={styles.nextbutton}>Next</Text>}
     
      prevButton={<Text style={styles.buttonText}></Text>} 
      >
        <View style={styles.slide1}>
        <View style={styles.container}>
      <Image style={styles.logo}
       source={require('../Assets/splash/Meal.jpg')}/>
        </View>
        </View>

        <View style={styles.slide2}>
        <View style={styles.container}>  
        <Image style={styles.logo}
       source={require('../Assets/splash/Housekeeper.png')} />
        </View>
        </View>

        <View style={styles.slide3}>
        <View style={styles.container}>  
        <Image style={styles.logo}
       source={require('../Assets/splash/serviceAppElder.png')} />
        </View>
        </View>

        <View style={styles.slide4}>
        <View style={styles.container}>  
        <Image style={styles.logo}
       source={require('../Assets/splash/support.png')} />
        </View>
        </View>

      <View style={styles.slide5}>
      <View style={styles.container}>  
      <Image style={styles.logo}
       source={require('../Assets/splash/Maintenance.png')} />
        </View>
        <TouchableOpacity
            style={styles.donebutton}
             onPress={()=>navigation.navigate("Home")}
            >
            <Text style={styles.donebuttontext}>Done</Text>
            </TouchableOpacity>
        </View>
      </Swiper>
      </View>
    )
}
export default OnBoardingScreen;