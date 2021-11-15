import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ServiceDetailsAbout=({navigation})=>{
const About=()=>{
        return(
            <View style={styles.textView}>
                <Text style={{color:'black'}}>Filler text is text that shares some characteristics
                 of a real written text, but is random or otherwise generated. It may be used to display a sample 
                 of fonts, enerate text for testing, or to spoof an e-mail spam filter. </Text>
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
        onPress={()=>navigation.navigate("ServiceDetailsAbout")}
      >
        <Text style={styles.barText}>About</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.barButton}
         onPress={()=>navigation.navigate("ServiceDetailsReview")}

      >
        <Text style={styles.barText}>Review</Text>
      </TouchableOpacity>
        </View>
        <About />
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
        top:"42%",
        backgroundColor:'#fff'
    },
    barButton:{
        margin:15,
        marginLeft:30,
        marginRight:30
    },
    barText:{
        color:"#03204c",
        fontWeight:'bold',
        fontSize:16
    },
    textView:{
        marginTop:70,
        margin:30,
        fontSize:15
    },

})

export default ServiceDetailsAbout;