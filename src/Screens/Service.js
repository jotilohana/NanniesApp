import React from 'react';
import {View, Text,StyleSheet, FlatList} from 'react-native';
import Search from './Search';

const DATA = [
  {
     text: 'How to use it',
     id:1,
  },
  {
     text: 'How to use it',
     id:2,

  },
  {
     text: 'How to use it',
    id:3,
  },
];


const ServicePortion=({text})=>{
    return(
        <View style={styles.MainView}>
                <View>
                <Text></Text>
                </View>
                {/* <Text style={styles.smallText}>SuperApp</Text>     */}
                <Text style={styles.Maintext}>{text}</Text>    
            </View>
        )
    }
const Service=()=>{
   const renderItem = ({ item }) => (
    <ServicePortion text={item.text}  image={item.image}/>
  );

    return(
        <View style={{flex:1,height:500,backgroundColor:"white"}}>
            <View style={styles.headerText}>
            <Text style={styles.headerText}>Services</Text>
            </View>
            <View> 
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            Vertical
      />
        </View>
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
        borderRadius:25
    },
    smallText:{
        fontSize:15,
        color:'white',
        padding:20,
        position:'relative',
        top:'30%',
    },
    Maintext:{
        fontSize:20,
        color:'white',
        position:'relative',
        top:'30%',
        padding:20,
        fontWeight:'bold'                                                          
    },

})
export default Service;