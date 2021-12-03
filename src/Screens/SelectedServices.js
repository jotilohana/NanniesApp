import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';

  const Messages = [
  {
    id: '1',
    status:'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate:"22-Nov-21",
    finalDate:"29-Nov-21",

  },
  {
    id: '2',
    status:'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate:"22-Nov-21",
    finalDate:"29-Nov-21",

  },
];

 const PastMessages = [
  {
    id: '1',
    status:'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate:"22-Nov-21",
    finalDate:"29-Nov-21",

  },
  {
    id: '2',
    status:'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate:"22-Nov-21",
    finalDate:"29-Nov-21",

  },
];

const Data=({item})=>{
    return(
         <View style={styles.mainView}>
        <TouchableOpacity
      >
        <View style={styles.cardView}>
            <View style={styles.ImgView}>
            <View style={{marginRight:10}}>
            <Image
            style={styles.image}
            source={require('../Assets/Background_Images.jpg')}
            />
            </View>
             <TouchableOpacity
                    style={styles.button}
                >
                <Text style={styles.buttonText}>{item.status}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secondView}>
            <View style={{flexDirection:'row', borderBottomWidth:2, borderColor:"#F4ECF7"}}>
            <Text style={styles.Text}>{item.serviceName}</Text>
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
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>{item.initailTime}</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>To</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c"}}>{item.finalTime}</Text>
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
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>{item.initailDate}</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c", marginRight:10}}>To</Text>
            <Text style={{fontSize:15,fontWeight:"bold", color:"#03204c"}}>{item.finalDate}</Text>
            </View>
            </View>
            </View>
        </View>
    </TouchableOpacity>
    </View>
    )
};

const PastSelectedService =({navigation})=>{
return(
   <View style={{marginBottom:"40%"}}>
   <FlatList
    data={PastMessages}
    keyExtractor={item => item.id}
    renderItem={Data}
    />
   </View>
)
};


const CurrentSelectedService =({navigation})=>{
return(
   <View style={{marginBottom:"40%"}}>
   <FlatList
    data={Messages}
    keyExtractor={item => item.id}
    renderItem={Data}
    />
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
        elevation:5,
    },
    ImgView:{
        width:'40%',
        height:155,
        borderRadius:20,
        margin:5,
        marginRight:0
    },
    image:{
        height:155,
        borderRadius:20,
        width:'100%',   
    },
    button:{
        backgroundColor:'#03204c',
        position:"absolute",
        right:80,
        height:20,
        top:10,
        borderRadius:10,
        padding:3,
        height:23,
        width:70
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:12
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
export  {CurrentSelectedService, PastSelectedService};
 