import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const Details=()=>{
    return(
        <View style={{flex:1}}>

            <View style={styles.firstCardView}>
                <View style={{borderRadius:10, paddingLeft:10}}>
                    <View style={styles.headerView}>
                    <Text style={styles.cardText}>Service Name</Text>
                    </View>
                    <View style={{marginTop:20, flexDirection:'row'}}>
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
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Hint</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white', textAlign:"center"}}>Done</Text>
                    </TouchableOpacity>
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
        width:'85%',
        borderRadius:10,
        marginTop:20,
        alignSelf:'center',
        elevation:5
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
      },
    cardText:{
        fontSize:25,
        color:'#03204c',
        fontWeight:'bold'
    },
    midCard:{
        backgroundColor:'white',
        marginTop:40,
        width:'85%',
        alignSelf:'center',
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        marginBottom:40
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
        padding:15
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
        height:50,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:25,
        borderBottomWidth:1,
        borderColor:"#F4ECF7",
        marginTop:5
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
        width:60
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