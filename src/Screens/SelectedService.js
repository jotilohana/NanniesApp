import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SelectedService =()=>{
    return(
         <View style={{ alignItems: 'center', flex:1}}>
            <View style={{marginTop:50, flexDirection:'row',alignItems: 'center',alignSelf:"center" }}>
                <View>
                <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                >
                <Text style={styles.buttonText}>InProgress</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                >
                <Text style={styles.buttonText}>Finished</Text>
                 </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                 >
                <Text style={styles.buttonText}>Canceled</Text>
                </TouchableOpacity>
                </View>
            </View>

                {/* Card View */}
            <View style={styles.CardView}>
                <View>
                    <Image
                    style={styles.CardImage}
                    source={require('../Assets/Background_Images.jpg')}
                     />
                </View>
                <View>
                    <View style={{flexDirection:"row", margin:15}}>
                    <Text style={styles.cardText}>Service Name</Text>
                    <Image
                    style={styles.Dots}
                    source={require('../Assets/Dots.png')}
                     />
                    </View>
                </View>
            </View>
         </View>
                  
        )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:"#03204c",
        margin:15,
        padding:5,
        borderRadius:10,
        width:90,
        height:35,
        alignSelf:'center'
    },
    buttonText:{
        color:"#FFFFFF",
        textAlign:"center"
    },
    //Card

    CardView:{
        flexDirection:"row",
        borderwidth:4,
        height:200,
        backgroundColor:"#FFFFFF",
        width:'90%',
        borderRadius:25,
        marginTop:25,
        padding:20
    },
    CardImage:{
        width:100,
        height:160,
        borderRadius:26
        // borderTopLeftRadius:25,
        // borderBottomLeftRadius:25
    },
    cardText:{
        fontSize:25,
        marginRight:20,
        color:'#03204c'
    },
    Dots:{
        height:20,
        width:20,
        marginTop:10

    }

})

export default SelectedService;

