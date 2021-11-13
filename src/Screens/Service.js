import React from 'react';
import {View, Text,StyleSheet, FlatList, Image} from 'react-native';
import Search from './Search';

const DATA = [
  {
     text: 'How to use it',
     id:1,
    image: require('../Assets/profile.jpg'),
  },
  {
     text: 'How to use it',
     id:2,
    image: require('../Assets/profile.jpg'),

  },
  {
     text: 'How to use it',
    id:3,
    image: require('../Assets/profile.jpg'),
  },
  {
     text: 'How to use it',
    id:4,
    image: require('../Assets/profile.jpg'),
  },
];


const ServicePortion=({text,image})=>{
    return(
        <View style={styles.MainView}>
                <View>
                <Text style={styles.Maintext}>{text}</Text>    
                </View>
                <View style={styles.imageView}>
            <Image style={styles.image} source={image} />
            </View>
            </View>
        )
    }
const Service=()=>{
   const renderItem = ({ item }) => (
    <ServicePortion text={item.text}  image={item.image}/>
  );

    return(
        <View style={{flex:1,height:550,backgroundColor:"white"}}>
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
        backgroundColor:'#03204c',
        height:150,
        margin:20,
        borderRadius:25,
        flexDirection:'row'
    },
    Maintext:{
        fontSize:20,
        color:'white',
        position:'relative',
        top:'50%',
        padding:20,
        fontWeight:'bold',
    },
    imageView:{
        marginRight:'auto',
        alignSelf:'center',
        marginLeft:20
    },
    image:{
        width:100,
        height:100,
        marginTop:10,
        marginRight:'auto'
    },

})
export default Service;