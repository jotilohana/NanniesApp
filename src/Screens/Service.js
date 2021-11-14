import React from 'react';
import {View, Text,StyleSheet, FlatList,ImageBackground, Image} from 'react-native';
import Search from './Search';

const DATA = [
  {
     text: 'How to use it',
     id:1,
    image: require('../Assets/Background_Images.jpg'),
  },
  {
     text: 'How to use it',
     id:2,
    image: require('../Assets/Background_Images.jpg'),

  },
  {
     text: 'How to use it',
    id:3,
    image: require('../Assets/Background_Images.jpg'),
  },
  {
     text: 'How to use it',
    id:4,
    image: require('../Assets/Background_Images.jpg'),
  },
];


const ServicePortion=({text,image})=>{
    return(
        <View style={styles.MainView}>
        <ImageBackground source={image}  style={styles.image}>
                <Text style={styles.Maintext}>{text}</Text>    
        </ImageBackground>
            </View>
        )
    }
const Service=()=>{
   const renderItem = ({ item }) => (
    <ServicePortion text={item.text}  image={item.image}/>
  );

    return(
        <View style={{flex:1,height:"100%",backgroundColor:"white"}}>
            <View style={styles.headerText}>
            <Text style={styles.headerText}>Services</Text>
            </View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            Vertical
      />
        </View>
    )
}
const styles = StyleSheet.create({
    headerText:{
        margin:5,
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        paddingLeft:10
    },
    MainView:{
        height:200,
        margin:20,
        borderRadius:25,
        overflow:'hidden'
    },
    Maintext:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        paddingTop:"30%",
        margin:20
    },
    image:{
        height:200,
    },

})
export default Service;