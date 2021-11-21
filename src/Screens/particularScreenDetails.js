import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Details=()=>{
    return(
        <View style={{flex:1, backgroundColor:'#ffffff',}}>
            <View style={{backgroundColor:"#ffff"}}>
            <View style={styles.firstCardView}>
                <View>
                    <View style={styles.headerView}>
                    <Text style={styles.cardText}>Service Name</Text>
                    </View>
                    <View style={{marginTop:20, flexDirection:'row', marginLeft:20}}>
                    <Image
                    source={require('../Assets/Location.png')}
                    />
                    <Text style={{margin:10, color:"black"}}>Filler text is text that</Text>
                    </View>
                 </View>
                <View style={{marginLeft:"auto"}}>
                    <Image
                    style={styles.CardImage}
                    source={require('../Assets/Background_Images.jpg')}
                    />
                </View>
            </View>

             <View style={styles.midCard}>
             <View>
             <Text style={styles.midCardText}>Contact Provider</Text>
             <Text style={styles.midCardSubText}>03376467383</Text>
             </View>
             <View style={{flexDirection:'row', marginLeft:'auto'}}>
             <Image
                    style={styles.icons}
                    source={require('../Assets/Call.png')}
                    />
            <Image
                    style={styles.icons}
                    source={require('../Assets/msg.png')}
                    />
             <Image
                    style={styles.icons}
                    source={require('../Assets/track.png')}
                    />
            </View>
            </View>
        <View style={{flexDirection:"row", borderBottomWidth:2, borderColor:"#F4ECF7",}}>
             <View style={{flex:1,height:5, backgroundColor:"#03204c",marginTop:55}}>
             </View>
        <View style={{flex:2,height:80,marginBottom:20,marginTop:10}}>
            <ProgressSteps
            completedProgressBarColor='#03204c'
            activeStepIconBorderColor="#03204c"
            completedProgressBarColor="#03204c"
            completedStepIconColor="#03204c"
            activeLabelColor="#03204c"
            >
                <ProgressStep label="First"
                nextBtnTextStyle={{color:'white'}}
                previousBtnTextStyle={{color:'white'}}
                nextBtnStyle={{marginBottom:18}}
                previousBtnStyle={{marginBottom:18}}

                >
                 <View style={{ alignItems: 'center' }}>
                 </View>
                </ProgressStep>
                <ProgressStep label="Second" 
                nextBtnTextStyle={{color:'white'}}
                previousBtnTextStyle={{color:'white'}}
                nextBtnStyle={{marginBottom:18}}
                previousBtnStyle={{marginBottom:18}}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third"
                nextBtnTextStyle={{color:'white'}}
                previousBtnTextStyle={{color:'white'}}
                nextBtnStyle={{marginBottom:18}}
                previousBtnStyle={{marginBottom:18}}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
        <View  style={{flex:1,width:20,height:5, backgroundColor:"#03204c",marginTop:55, marginRight:0}}>
        </View>
        </View>
            {/* <View style={{width:'2', backgroundColor:""}}></View> */}

            <View style={styles.EndCard}>
                <View style={styles.EndheaderView}>
                    <Text style={styles.cardText,{color:"black",fontWeight:'bold', fontSize:20}}>Service Name</Text>
                    <Text style={styles.number}>#105</Text>
                    
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Status</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white', textAlign:"center"}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Payment Status</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white', textAlign:"center"}}>Paid</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Payment Method</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white', textAlign:"center"}}>Cash</Text>
                    </TouchableOpacity>
                </View>
            </View>
                </View>
                    <TouchableOpacity
                        style={styles.Button}
                        // onPress={onPress}
                         >
                        <Text style={styles.ButtonText}>Review</Text>
                    </TouchableOpacity>
             </View>
    )
}

const styles=StyleSheet.create({
    firstCardView:{
        flexDirection:'row',
        height:120,
        backgroundColor:"white",
        width:'100%',
        borderRadius:10,
        marginTop:10,
        alignSelf:'center',
        borderBottomWidth:2, 
        borderColor:"#F4ECF7",
    },
    CardImage:{
        width:100,
        height:120,
        borderRadius:10,
        marginRight:'auto',
        
    },
    headerView:{
        flexDirection:"row",
        backgroundColor:"white",
        height:50,
        width:200,
        padding:10,
        marginLeft:20
      },
    cardText:{
        fontSize:25,
        color:'#03204c',
        fontWeight:'bold',
    },
    midCard:{
        backgroundColor:'white',
        marginTop:30,
        width:'100%',
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:"#F4ECF7",
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:10
    },
    midCardText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    midCardSubText:{
        color:'black',
        textAlign:'center'
    },
    icons:{
        margin:5,
        borderRadius:10,
        padding:10
    },

    //End portion
    EndCard:{
        backgroundColor:"#FFFFFF",
        width:"85%",
        alignSelf:"center",
        borderRadius:25,
    },
    EndheaderView:{
        flexDirection:"row",
        backgroundColor:"white",
        height:40,
        borderRadius:25,
        borderBottomWidth:1,
        borderColor:"#F4ECF7",
        marginTop:20
      },
      EndcardText:{
        fontSize:14,
        marginRight:20,
        color:'#03204c',
    },

    number:{
        marginLeft:'auto',
        marginTop:5,
        color:"#03204c",
        fontWeight:'bold'
    },

    EndCardButton:{
        marginLeft:'auto',
        backgroundColor:'#03204c',
        borderRadius:10,
        padding:4,
        width:60,
        height:30
    },

    //End Button
    Button:{
        backgroundColor:'#03204c',
        width:'85%',
        alignSelf:'center',
        padding:15,
        borderRadius:20,
        marginTop:'auto',
        marginBottom:20
    },
    ButtonText:{
        color:'white',
        textAlign:'center',
        fontSize:18
    }
})

export default Details;