import React, {useEffect, useState} from 'react';
import {Text, Image, View, FlatList,ScrollView, StyleSheet,SafeAreaView} from 'react-native';
import axios from 'axios';

const API_URL = "https://evening-inlet-11817.herokuapp.com/Faq"; 

const FAQ = () => {
  const [data, setData]= useState([]);
  useEffect(()=>{
    axios.get(API_URL).then((res)=>{
      setData(res.data.data);
    })
    .catch((err)=>{
      console.warn(err)
    })
  })
  const Item = ({ text }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
      <Image
          style={styles.Image}
          source={require('../Assets/plus.png')}
        />
    </View>
  );
  const renderItem = ({ item }) => (
    <Item text={item.question}  image={item.image}/>
  );
    
  return (
    <View style={styles.container}>
    <View style={styles.imageView}>
        <Image
        style={styles.headerImage}
        source={require('../Assets/FAQ/FAQ.jpg')}
      />
    </View>
    <Text style={styles.headerText}>FQA</Text>
         <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        Vertical
      /> 
       
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth:2,
    borderBottomColor:'#E1DFDF',
    borderStyle:"dashed",
    width:'80%',
    alignSelf:'center',
    flexDirection:'row'
  },
  imageView:{
    width:'100%',
    height:350,
    marginBottom:30
  },
  headerImage:{
    // width: 3,
    height:'100%',
    // margin:50,
    width:'100%',
    resizeMode:'contain'
  },
  headerText:{
      color:'black',
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      marginBottom:15,
      borderBottomWidth:2,
      borderBottomColor:'#03204c',
      borderStyle:"dashed",
      width:'20%',
      alignSelf:'center'
  },
  Image:{
      marginLeft:'auto'
  },
  text:{
    color:'black',
    fontSize: 15,
    fontWeight:'bold',
    marginRight:10,
  }
});

export default FAQ;
