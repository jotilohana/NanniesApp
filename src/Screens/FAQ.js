import React from 'react';
import {Text, Image, View, FlatList,ScrollView, StyleSheet,SafeAreaView} from 'react-native';


const DATA = [
  {
     text: 'How to use it',
     id:1,
    image: require('../Assets/plus.png'),
  },
  {
     text: 'How to use it',
     id:2,
    image: require('../Assets/plus.png'),

  },
  {
     text: 'How to use it',
    id:3,
    image: require('../Assets/plus.png'),
  },
  {
     text: 'How to use it',
    id:4,
    image: require('../Assets/plus.png'),
  },
];

const Item = ({ text, image }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
    <Image
        style={styles.Image}
        source={image}
      />
  </View>
);

const FAQ = () => {
  const renderItem = ({ item }) => (
    <Item text={item.text}  image={item.image}/>
  );

  return (
    <View style={styles.container}>
    <View>
        <Image
        style={styles.headerImage}
        source={require('../Assets/FQA.jpg')}
      />
    </View>
    <Text style={styles.headerText}>FQA</Text>
      <FlatList
        data={DATA}
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
  headerImage:{
    width:'80%',
    height:200,
    alignSelf:'center',
    margin:50
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
    fontSize: 16,
    fontWeight:'bold'
  }
});

export default FAQ;
