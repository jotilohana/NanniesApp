import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import action from '../common/Api'
import axios from 'axios'

const API_URL = 'https://evening-inlet-11817.herokuapp.com/about'

const ServiceDetails = ({navigation}, props) => {

  const RenderAbout = () => {
    return (
        <ScrollView>
      <View style={styles.textView}>
        {/* <Text style={{color: 'black', fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Help getting up and going to bed for the elderly :     {'\n'}</Text>
        A home help service morning and evening for the elderly whoseloss of autonomy prevents them from performing on their own the movements that allow them to lie down in a bed but also to get up, getdressed or undressalone.{'\n'}
         <Text style={{fontWeight:'bold',}}>Toiletaid :{'\n'}</Text>
          Whatever the level of autonomy of the elderly person, the care giver helps them daily with their toilet and hygiene procedures. The caregiver can alsosuggestbathroom arrangements. All in order to facilitate the movements of the elderly.
        <Text style={{fontWeight:'bold',}}>{'\n'}Night presence :{'\n'} </Text>
         When the presence of a care giver at night is necessary, she is available at any time of the night to help the elderly person if theyneed to get up or simply to reassure them.
         </Text> */}

        {/* <Text style={{color: 'black', fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Shopping and mealpreparation :    {'\n'}</Text>
        Depending on the tastes and desires of the elderlyperson, the caregiverbuysfreshproduceeveryday. The caregiverpreparesmealsaccording to the tastes, desires and diets of the elderlyperson.{'\n'}
         <Text style={{fontWeight:'bold',}}>{'\n'}Help withtakingmeals :{'\n'}</Text>
         Help witheatingmeals at home by a careris for elderly people who have difficultyeating on theirown.
        </Text> */}

        {/* <Text style={{color: 'black', fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Accompaniment to shopping :  {'\n'}</Text>
        This service allows the elderly, for example, to go to the market without having to carry a bag or pull a shopping cart. The carer can then prepare meals with freshly purchased products.{'\n'}
         <Text style={{fontWeight:'bold',}}>{'\n'}Accompaniment to the walk :{'\n'}</Text>
         A little exercise everyday to maintain or stimulate the muscles and therefore the independence of the elderly. The presence of the care giver makes it possible to exercisedailywhileavoiding the risk of falling for the elderly.
         <Text style={{fontWeight:'bold',}}>{'\n'}Support for cultural outings : {'\n'}</Text>
         Bridge club, museum, visit to a friend ... the presence of a carerhelpselderly people withloss of autonomy to maintain social life and cultural activities. These outings can bedone on foot, by public transport, or by taxi.
        </Text> */}

        {/* <Text style={{color: 'black', fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Housework :  {'\n'}</Text>
        Vacuuming, cleaning the bathroomsafter use, dusting ... the caregiverensuresthat the elderlyperson's home isalways clean and pleasant{'\n'}
         <Text style={{fontWeight:'bold',}}>{'\n'}Ironing :{'\n'}</Text>
         The carers can alsoiron the laundry of the elderlyperson:clothes, householdlinen, etc.
         <Text style={{fontWeight:'bold',}}>{'\n'}Laundry : {'\n'}</Text>
         The caregiver changes and washes the sheets and towels of the elderlyperson on a regular basis.
        </Text> */}
        
        <Text style={{color: 'black', fontSize:13}}>
        CARE INC has in itsmidst, a valiant team, which offer sits cleaning services of premises for professional and personal use.
        </Text>
      </View>
      </ScrollView>
    )}
    return(
    <View style={styles.Main_view}>
      <View style={styles.headerView}>
        {/* <Image
          style={styles.HeaderImage}
        //   source={require('../Assets/splash/Meal.jpg')}
          source={require('../Assets/Services/Eldercare.png')}

        /> */}
        {/* <Image
          style={styles.HeaderImage}
          source={require('../Assets/Services/Meal.png')}
        /> */}
          {/* <Image
          style={styles.HeaderImage}
          source={require('../Assets/Services/support.png')}
        /> */}
         {/* <Image
          style={styles.HeaderImage}
          source={require('../Assets/Services/housekeeper.png')}
        /> */}
         <Image
          style={styles.HeaderImage}
          source={require('../Assets/Services/Maintenance.png')}
        />
      </View>
      <View style={styles.barView}>
        <TouchableOpacity
          style={styles.barButton}>
          <Text style={styles.barText}>
            About
          </Text>
        </TouchableOpacity>
      </View>
        <RenderAbout />
      <View style={styles.BottomView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Booking Form')}>
          <Text style={styles.buttonText}>Book Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Main_view: {
    flex: 1,
  },
  headerView: {
    height: '40%',
    backgroundColor:"white"
  },
  HeaderImage: {
    height: '100%',
    width:'100%',
    resizeMode:'contain'
  },
  barView: {
    flexDirection: 'row',
    width: '90%',
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 0.5,
    borderRadius: 5,
    position: 'absolute',
    top: '28%',
    backgroundColor: '#fff',
  },
  barButton: {
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  barText: {
    color: '#03204c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textView: {
    marginTop: 70,
    margin: 30,
    fontSize: 15,
  },
    BottomView: {
    height: 50,
  },
  button: {
    width: '40%',
    borderRadius: 10,
    margin: 10,
    alignSelf:'center'
},
  buttonText: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#03204c',
  },
});

export default ServiceDetails;
