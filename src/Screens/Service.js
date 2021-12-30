import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import axios from 'axios';

const API_URL = 'https://evening-inlet-11817.herokuapp.com/service'


const Service = ({navigation}) => {
  
  const DATA = [
    {
       text: 'Elder Care ',
       id:1,
       image: require('../Assets/Services/Eldercare.png'),
    },
    {
       text: 'Meal',
       id:2,
      image: require('../Assets/Services/Meal.png'),
    },
    {
      text: 'Support',
      id:3,
      image: require('../Assets/Services/support.png'),
    },
    {
       text: 'Maintenance',
      id:4,
      image: require('../Assets/Services/Maintenance.png'),
    },
    {
       text: 'HouseKeeper',
      id:4,
      image: require('../Assets/Services/housekeeper.png'),
  
    },
    
  ];
  // const [DATA, setPost] = React.useState(null)

  // React.useEffect(() => {
  //   axios.get(API_URL).then(response => {
  //     setPost(response.data.data)
  //   })
  // }, [])

  // if (!DATA) return null


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex: 1, height: '100%'}}>
      <View style={styles.headerText}>
        <Text style={styles.headerText}>Services</Text>
      </View>

      {DATA.map((item)=>{

  return(
  <View style={styles.MainView}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Service Details')}>
      <View  key={item.id} style={styles.container}>
        <View style={styles.imageView}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  )
})}
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  headerText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  MainView: {
    height: 200,
    margin: 20,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  Maintext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: '30%',
    margin: 20,
    marginLeft: 0,
    marginTop: 'auto',
  },

  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageView: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})
export default Service
