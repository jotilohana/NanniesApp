import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Card = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
    <View style={styles.imageView}>
      <Image source={imageUri} style={styles.img} />
      </View>
      <View  style={styles.textView}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: wp('70%'),
      alignSelf: 'center',
      height: 270,
      borderRadius: 25,
      margin: 8,
      marginTop:0,
      backgroundColor:'white'
  },
  imageView:{
    width:'100%',
    height:180,
    marginTop:10,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textView:{
    margin:15,
  },
  text:{
    color: 'black',
     fontWeight: 'bold', 
  }
});

export default Card;
