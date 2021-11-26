import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const Messages = [
  {
    id: '1',
    userName: 'Jenny',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];



const MessagesScreen = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            
            <View>
            <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
            <TouchableOpacity style={styles.subView}
            onPress={()=>navigation.navigate("ChatScreen", {userName:item.userName})}
            >
            <View style={styles.UserInfo}>
                <View style={styles.ImgView}>
                <Image
                style={styles.Image}
                source={item.userImg}
                />
                </View>

                <View style={styles.textSection}>

                <View style={styles.textView}>
                <Text style={styles.text}>{item.userName}</Text>
                <Text style={styles.timeText}>{item.messageTime}</Text>
                </View>

                <Text style={styles.messageText}>{item.messageText}</Text>
                </View>
            </View>
            
            
            </TouchableOpacity>
          )}
            />
            
            
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    subView:{
        width: '100%'
    },
    UserInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ImgView:{
        paddingTop: 15,
        paddingBottom: 15,
    },
    Image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textSection:{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 5,
        marginRight:30
    },
    text:{
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    timeText:{
        fontSize: 12,
        color: '#666',
        fontFamily: 'Lato-Regular',
    },
    messageText:{
        fonSize: 14,
        color: '#333333',
    }


})

export default MessagesScreen;