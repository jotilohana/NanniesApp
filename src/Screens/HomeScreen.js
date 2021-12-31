import AboutUs from './aboutUs'
import React, { useEffect , useState} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Home_card from './Home_card';
import TestimonialSection from './testimonialSection';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Time from './Time';



const DATA = [
  {
    id: 1,
    image: require('../Assets/Services/Eldercare.png'),
    name: 'Wedding photos',
  },
  {
    id: 2,
    image: require('../Assets/Services/Meal.png'),
    name: 'Party photos',
  },
  {
    id: 3,
    image: require('../Assets/Services/support.png'),
    name: 'Picnic photos',
  },
  {
    id: 4,
    image: require('../Assets/Services/Maintenance.png'),
    name: 'School photos',
  },
  {
    id: 5,
    image: require('../Assets/Services/housekeeper.png'),
    name: 'Uni photos',
  },
]
const HomeScreen=({navigation})=> {
  const ServiceHeader = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            margin: 10,
          }}>
          Services
        </Text>
        <View style={{marginLeft: 'auto'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Service')}
            style={{
              backgroundColor: '#03204c',
              padding: 5,
              borderRadius: 25,
              margin: 10,
            }}>
            <Text style={{color: 'white'}}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderItem = ({item}) => {
    return <Home_card imageUri={item.image} name={item.name} />
  }
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiper}>
        <View style={styles.Main_view}>
          <Swiper
            style={styles.wrapper}
            loop={false}
            showsButtons={false}
            dotStyle={{width: 20, height: 4, backgroundColor: 'grey'}}
            activeDotStyle={{width: 20, height: 4, backgroundColor: '#03204c'}}
            paginationStyle={{
              justifyContent: 'flex-start',
              marginLeft: '3%',
            }}>
            <View style={styles.slide1}>
              <View style={styles.container}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../Assets/homeslider/Image1.png')}
                    style={styles.image}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}
                  style={styles.Nav}>
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
                  onPress={() => navigation.toggleDrawer()}
                  style={styles.Nav}>
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
                  onPress={() => navigation.toggleDrawer()}
                  style={styles.Nav}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../Assets/Menu_Icon.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Swiper>
        </View>
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
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  //Homeswiper
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
  container: {
    flex: 1,
  },
  Main_view: {
    marginBottom: 30,
    height: 250,
    width: '100%',
    padding: 0,
  },
  imageView: {
    width: wp('100%'),
    height: 250,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  //header
  Nav: {
    margin: '5%',
    position: 'absolute',
    top: '0%',
  },
  tinyLogo: {
    width: '70%',
    height: 20,
  },
})
export default HomeScreen
