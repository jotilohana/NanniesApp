import React from 'react';
import {Text,Image, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import action from '../common/Api';

// const API_URL = "https://evening-inlet-11817.herokuapp.com/";  

class Home_swiper extends React.Component
{
  constructor()
    {
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount()
    {
        this.callApi();
    }

    async callApi()
    {
            
      await action.get('/banner',{}).then((response)=>{
        this.setState({data:response.data.data});
        console.warn(response.data.data)
      }).catch((err)=>{
        console.warn(err);
      })

     

      
    }


  render(){

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


          {/* {
              this.state.data.map((item)=>{
                console.warn(item)
              })
          } */}
         
          <View style={styles.slide1}>
          <View style={styles.container}>
          <View style={styles.imageView}>
          
          <Image
          // source={require('../Assets/homeslider/Image1.jpg')}
          source={{uri: 'https://evening-inlet-11817.herokuapp.com/uploads/banner/file-1639304862165.PNG'}}  
          style={styles.image}  
        />
          </View>  
          
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
          source={require('../Assets/homeslider/Image1.jpg')}
          style={styles.image}    
        />
      
          </View>
          </View>

        <View style={styles.slide1}>
        <View style={styles.container}>
        <Image
          source={require('../Assets/homeslider/Image3.jpg')}
          style={styles.image}    
        />         
      
          </View>
          </View>
        </Swiper>
        </View>
      )
  }
}

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
    flex:1,
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

export default Home_swiper;