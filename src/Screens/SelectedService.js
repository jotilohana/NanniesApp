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
                    <View style={styles.headerView}>
                    <Text style={styles.cardText}>Service Name</Text>
                    <Image
                    style={styles.Dots}
                    source={require('../Assets/Dots.png')}
                     />
                    </View>
                    <View style={styles.bottom}>
                    <Text style={styles.bottomTextTime}><Text style={{color:'#F69153',fontSize:22,fontWeight:"bold"}}>10:00</Text>PM to <Text style={{color:'#F69153',fontSize:22,fontWeight:"bold"}}>12:00</Text>PM</Text>
                    <View style={{alignSelf:"center",width:'80%', backgroundColor:'#fff', height:1}}></View>
                    <Text style={styles.bottomTextDate}><Text style={{color:'#F69153',fontSize:22,fontWeight:"bold"}}>20</Text>-Nov-2021 to <Text style={{color:'#F69153',fontSize:22,fontWeight:"bold"}}>22</Text>-Nov-21</Text>
                    </View>
                </View>
            </View>   
            </View> 
        );
};
const styles= StyleSheet.create({
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
        flexDirection:'row',
        borderwidth:4,
        height:200,
        backgroundColor:"white",
        width:'90%',
        borderRadius:25,
        marginTop:25,
    },
    CardImage:{
        width:100,
        height:200,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25
    },
    headerView:{
        elevation: 5,
        flexDirection:"row",
        backgroundColor:"white",
        height:50,
        width:225,
        borderTopRightRadius:10,
        padding:10
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
    },
    bottom:{
        backgroundColor:"#03204c",
        padding:5,
        borderBottomRightRadius:20,
        height:150,
    },
    bottomTextTime:{
        color:"#FFFFFF",
        fontSize:16,
        marginTop:70,
        font:'Roboto',
        textAlign:'center'
    },
    bottomTextDate:{
        color:"#FFFFFF",
        fontSize:16,
        font:'Roboto',
        textAlign:'center',
    }
});

export default SelectedService;

