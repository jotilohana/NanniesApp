import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Details=()=>{
    return(
        <View style={{flex:1}}>

            <View style={styles.firstCardView}>
                <View>
                    <View style={styles.headerView}>
                    <Text style={styles.cardText}>Service Name</Text>
                    </View>
                    <View style={{marginTop:20, flexDirection:'row'}}>
                    <Image
                    // style={styles.CardImage}
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
             </View>
    )
}

const styles=StyleSheet.create({
    firstCardView:{
        flexDirection:'row',
        height:120,
        backgroundColor:"white",
        width:'85%',
        borderRadius:25,
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
        padding:10
      },
    cardText:{
        fontSize:22,
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
        flexDirection:'row'
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
        margin:5
    }

})

export default Details;