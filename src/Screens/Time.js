import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Button, Platform, StyleSheet, Text, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Time = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'Android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={styles.Button}>
        <Text style={{color:'black'}}>Working Period</Text>
        <TouchableOpacity
        style={{borderBottomWidth: 1, marginLeft:30, flexDirection:'row'}}
        onPress={showDatepicker}
        >
        <Image
          source={require('../Assets/calender.png')}
          />
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{borderBottomWidth: 1, flexDirection:'row', marginLeft:30}}
        onPress={showDatepicker}
        >
         <Image
          source={require('../Assets/calender.png')}
          />
          <Text style={styles.text}>End</Text>
        </TouchableOpacity>
      </View>

      {/* Time */}
      <View style={styles.Button}>
      <Text style={{color:'black'}}>Working Time</Text>
      <TouchableOpacity
        onPress={showTimepicker}
        style={{borderBottomWidth: 1, marginLeft:30, flexDirection:'row'}}

        >
         <Image
          source={require('../Assets/smalltime.png')}
          />
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={showTimepicker}
        style={{borderBottomWidth: 1, marginLeft:30, flexDirection:'row'}}
        >
        <Image
          source={require('../Assets/smalltime.png')}
          />
          <Text style={styles.text}>End</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles=StyleSheet.create({
  Button:{
    width:"100%",
        height: 50,
        borderWidth: 1,
        paddingLeft:20,
        padding:15,
        alignSelf:'center',
        borderRadius:5,
        color:'black',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        flexDirection:"row"
  },
  text:{
    color:"black"
  }
})
export default Time;