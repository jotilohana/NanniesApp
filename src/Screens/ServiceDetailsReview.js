import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import TestimonialSection from './testimonialSection';

const ServiceDetailsReview=({navigation})=>{
const Review=()=>{
        return(
            <View style={styles.ReviewView}>
            <TestimonialSection />
            </View>
        )
    }
    return(
        <View style={styles.Main_view}>
        <View style={styles.headerView}>
        <Image
        style={styles.HeaderImage}
        source={require("../Assets/Background_Images.jpg")}
      />
        </View>
        <View style={styles.barView}>
             <TouchableOpacity
        style={styles.barButton}
        onPress={()=>navigation.navigate('ServiceDetailsAbout')}
      >
        <Text style={styles.AboutText}>About</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.barButton}
         onPress={()=>navigation.navigate('ServiceDetailsReview')}

      >
        <Text style={styles.ReviewText}>Review</Text>
      </TouchableOpacity>
        </View>
        <Review />
        </View>
    )
}

const styles=StyleSheet.create({
    Main_view:{
        flex:1,
    },
    headerView:{
        height:'50%'
    },
    HeaderImage:{
        height:'100%',
    },
    barView:{
        flexDirection:'row',
        width:'90%',
        margin:20,
        alignSelf:"center",
        justifyContent:"center",
        elevation:0.3,
        borderRadius:5,
        position:'absolute',
        top:"40%",
        backgroundColor:'#fff'
    },
    barButton:{
        margin:15,
        marginLeft:30,
        marginRight:30,
    },
    AboutText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#03204c'
    },
    ReviewText:{
        fontWeight:'bold',
        fontSize:16,
        color:'grey'
    },
    textView:{
        marginTop:70,
        margin:30,
        fontSize:15
    },
    
    //REVIEW
    ReviewView:{
        marginTop:30
    },
    mainText:{
        color:'#fff'
    }

})

export default ServiceDetailsReview;