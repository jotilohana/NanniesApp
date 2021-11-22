import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';


const SelectedService =()=>{
return(
    <View style={styles.mainView}>
    
        <View style={styles.cardView}>
            <View style={styles.ImgView}>
            <ImageBackground source={require("../Assets/Background_Images.jpg")} style={styles.image}>
             {/* <TouchableOpacity
                    style={styles.button}
                    // onPress={onPress}
                >
                <Text style={styles.buttonText}>Press Here</Text>
                </TouchableOpacity> */}
            </ImageBackground>
            </View>

            <View style={styles.secondView}>
            <View style={{flexDirection:'row', borderBottomWidth:2, borderColor:"#F4ECF7"}}>
            <Text style={styles.Text}>Service Name</Text>
            <Image
            style={styles.Dots}
            source={require('../Assets/Dots.png')}
            />
            </View>
            <View style={{paddingBottom:5, marginTop:15, borderBottomWidth:2, borderColor:"#F4ECF7"}}>
            <View style={{flexDirection:'row'}}>
            <Image
            style={styles.TimeIcon}
            source={require('../Assets/Time.png')}
            />
            <Text style={{fontSize:15,marginRight:4}}>Service Time </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>12:00AM</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>To</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c"}}>12:00PM</Text>
            </View>
            </View>

            <View style={{marginTop:10}}>
            <View style={{flexDirection:'row'}}>
            <Image
            style={styles.TimeIcon}
            source={require('../Assets/date.png')}
            />
            <Text style={{fontSize:15,marginRight:4}}>Service Date</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>22-Nov-21</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>To</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c"}}>29-Nov-21</Text>
            </View>
            </View>
            </View>
        </View>
    
    </View>
)
};

const styles=StyleSheet.create({
    mainView:{
        flex:1
    },
    cardView:{
        backgroundColor:'white',
        height:185,
        borderRadius:20,
        margin:10,
        flexDirection:'row',
        padding:10,
        elevation:5
    },
    ImgView:{
        width:'38%',
        height:155,
        borderRadius:20,
        margin:5,
        overflow:'hidden',
    },
    image:{
        height:155,
        borderRadius:20,
        width:'100%',
    },
    button:{
        backgroundColor:'#03204c',
        width:50,
        position:"absolute",
        
    },
    buttonText:{
        color:'white'
    },
    //Second Portion
    secondView:{
        padding:5
    },
    Text:{
        fontSize:20,
        fontWeight:"bold",
        color:'#03204c',
        paddingBottom:5,
    },
    Dots:{
        marginLeft:'auto',
        marginTop:5
    },
    TimeIcon:{
        marginRight:3
    },
    SubText:{
        marginRight:10
    },
    subTextheader:{
        marginTop:10
    }

})
export default SelectedService;