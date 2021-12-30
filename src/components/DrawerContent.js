import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

export default function DrawerContent({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Home')}>
          <Icon name='home' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18, marginLeft:10}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Service')}>
            <Icon name='build' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,  marginLeft:10}}>
            Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Profile')}>
            <Icon name='people' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,  marginLeft:10}}>
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Chatscreen')}>
            <Icon name='chatbubbles' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,   marginLeft:10}}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Home')}>
            <Icon name='checkmark-done-circle' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,   marginLeft:10}}>
            Booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('FAQ')}>
            <Icon name='help-circle' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,   marginLeft:10}}>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Home')}>
            <Icon name='log-out' color='#03204c' size={24} />
          <Text style={{color: '#03204c', fontSize: 18,   marginLeft:10}}>
            Logout
          </Text>
        </TouchableOpacity>

      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerItemStyle: {
    padding: 5,
    marginTop: 30,
    margin:10,
    flexDirection:'row'
  },
});
