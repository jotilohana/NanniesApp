
import AboutUs from './aboutUs';
import React from 'react';
import {Text, Image, View, ScrollView, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import Home_swiper from './Home_swiper';
import Home_card from './Home_card';
import TestimonialSection from './testimonialSection';
import Maps from './Map';

const DATA = [
  {
    id:1,
    image: require('../Assets/Services/Eldercare.png'),
    name: 'Wedding photos',
  },
  {
    id:2,
    image: require('../Assets/Services/Meal.png'),
    name: 'Party photos',
  },
  {
    id:3,
    image: require('../Assets/Services/support.png'),
    name: 'Picnic photos',
  },
  {
    id:4,
    image: require('../Assets/Services/Maintenance.png'),
    name: 'School photos',
  },
  {
    id:5,
    image: require('../Assets/Services/housekeeper.png'),
    name: 'Uni photos',
  },
];


const HomeScreen = ({navigation, route}) => {
  const ServiceHeader=({item})=>{    
    return(
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:10}}>Services</Text>
        <View style={{marginLeft:'auto'}}>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Service') }
          style={{
           backgroundColor: "#03204c",
           padding:5,
           borderRadius:25,
           margin:10,
            }}
          >
          <Text style={{color:'white'}}>View All</Text>
        </TouchableOpacity>
        </View>
       </View>
    )
  }
  const renderItem = ({item}) => {
    return <Home_card imageUri={item.image} name={item.name} />
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiper}>
        <Home_swiper />
      </View>
      <ServiceHeader />
      <View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={renderItem}
        horizontal
      />
      </View>
      <View>
      <AboutUs />
      </View>
      <View style={styles.mainView}>
      <Text style={styles.mainText}>Testimonial</Text>
      <TestimonialSection />
      </View>

      <TouchableOpacity
            style={styles.btn}
             onPress={()=>navigation.navigate("Chat")}
            >
            <Text style={styles.btntext}>Chat</Text>
            </TouchableOpacity>
       </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginTop:20
  },
});
export default HomeScreen;