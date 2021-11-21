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
                    <Text style={{margin:10}}>Filler text is text that</Text>
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
                    <Image
                    style={styles.Dots}
                    source={require('../Assets/Dots.png')}
                     />
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Status</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white'}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Payment Status</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white'}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Payment Method</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white'}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.EndheaderView}>
                    <Text style={styles.EndcardText}>Hint</Text>
                    <TouchableOpacity
                        style={styles.EndCardButton}
                        // onPress={onPress}
                         >
                        <Text style={{color:'white'}}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
        marginTop:20,
        width:'85%',
        alignSelf:'center',
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        marginBottom:20
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
        backgroundColor:"#CCD1D1",
        borderRadius:10,
        padding:15
    },
    EndCard:{
        backgroundColor:"#FFFFFF",
        width:"85%",
        alignSelf:"center",
        borderRadius:25

    },
    EndheaderView:{
        elevation: 5,
        flexDirection:"row",
        backgroundColor:"white",
        height:50,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
      },
      EndcardText:{
        fontSize:14,
        marginRight:20,
        color:'#03204c',
    },
    Dots:{
        height:20,
        width:20,
        marginLeft:'auto',
    },
    EndCardButton:{
        marginLeft:'auto',
        backgroundColor:'#03204c',
        borderRadius:10,
        padding:4
    }

})

export default Details;