import React, {useState} from 'react'
import {
  View,
  Image,
  Modal,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps'
import DropDown from './DropDown'
import Time from './Time'

const DATA = [
  {
    id: 1,
    name: 'Su',
  },
  {
    id: 2,
    name: 'M',
  },
  {
    id: 3,
    name: 'Tu',
  },
  {
    id: 4,
    name: 'W',
  },
  {
    id: 5,
    name: 'Th',
  },
  {
    id: 6,
    name: 'F',
  },
  {
    id: 7,
    name: 'Sa',
  },
]
const BookingForm = ({navigation}) => {
  const [textFN, onChangeTextFN] = useState()
  const [textLN, onChangeTextLN] = useState()
  const [textG, onChangeTextG] = useState()
  const [textA, onChangeTextA] = useState(
    'Filler text is text that shares some characteristics of a real written text',
  )
  const [textC, onChangeTextC] = useState()
  const [textE, onChangeTextE] = useState()
  const [textT, onChangeTextT] = useState()
  const [textWD, onChangeTextWD] = useState()
  const [textWT, onChangeTextWT] = useState()
  const [textBooking, onChangeTextBooking] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [clicked, setClicked] =useState('');
  const [color,setColor]=useState(false)

  return (
    <ScrollView>
      <View style={styles.Main_view}>
        <View>
          <Text style={styles.HeaderText}>Book Services</Text>
          <Text style={styles.subText}>
            Fill all form field to move on next step
          </Text>
        </View>
        <View style={{height: 640, width: '100%', borderRadius: 25}}>
          <ProgressSteps
            completedProgressBarColor='#03204c'
            activeStepIconBorderColor='#03204c'
            completedProgressBarColor='#03204c'
            completedStepIconColor='#03204c'
            activeLabelColor='#03204c'>
            <ProgressStep
              label='First Step'
              nextBtnStyle={styles.buttonstylenext}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}>
              <View style={styles.formView}>
                <DropDown />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextFN}
                  value={textFN}
                  placeholder='First Name'
                  placeholderTextColor='black'
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextLN}
                  value={textLN}
                  placeholder='Last Name'
                  placeholderTextColor='black'
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextG}
                  value={textG}
                  placeholder='Gender'
                  placeholderTextColor='black'
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label='Second Step'
              nextBtnStyle={styles.buttonstylenext}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.buttonstyleprev}>
              <View style={styles.formView}>
                <View style={styles.AddressView}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.addressText}>Home</Text>
                    <View style={{marginLeft: 'auto', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.CurrentLocation}
                        onPress={() => navigation.navigate('Edit Profile')}>
                        <Image source={require('../Assets/Locationicon.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.EditButton}
                        onPress={() => navigation.navigate('Change address')}>
                        <Text style={styles.EditText}>Change</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    multiline
                    numberOfLines={2}
                    style={styles.inputAddress}
                    onChangeText={onChangeTextA}
                    value={textA}
                    placeholderTextColor='black'
                  />
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextC}
                  value={textC}
                  placeholder='City'
                  placeholderTextColor='black'
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextE}
                  value={textE}
                  placeholder='Email'
                  placeholderTextColor='black'
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextT}
                  value={textT}
                  placeholder='Telephone'
                  placeholderTextColor='black'
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label='Third Step'
              onSubmit={() => navigation.navigate('Thankyou')}
              nextBtnStyle={styles.buttonstylenext}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.buttonstyleprev}>
              <View style={styles.formView}>
                <Time />

                <TouchableOpacity
                style={styles.input}
                onPress={() => setModalVisible(true)}>
                  <Text style={{color: 'black'}}>Working Days</Text>
                </TouchableOpacity>

                <Modal
                  style={styles.modelStyle}
                  animationType='slide'
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible)
                  }}
                  >
                    
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      {DATA.map((item, key) => {
                          if(item.id==clicked){
                            ()=>setColor(true)}
                        return (  
                          <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                setClicked(key)}
                            >
                            <Text style={color?styles.text:styles.textClicked}>{item.name}</Text>
                          </TouchableOpacity>
                        )
                      })}
                    </View>
                  </View>
                </Modal>

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTextBooking}
                  value={textBooking}
                  placeholder='Booking Note'
                  placeholderTextColor='black'
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Main_view: {
    alignSelf: 'center',
    marginTop: 20,
    margin: 0,
  },
  HeaderText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
  },
  subText: {
    color: 'black',
    textAlign: 'center',
  },
  formView: {
    marginTop: 0,
    backgroundColor: 'white',
    padding: 20,
    width: 320,
    alignSelf: 'center',
    borderRadius: 25,
    height: 400,
  },
  formHeaderText: {
    fontSize: 28,
    color: '#03204c',
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  buttonstylenext: {
    backgroundColor: '#03204c',
    borderRadius: 20,
    padding: 4,
    width: 95,
  },
  buttonstyleprev: {
    backgroundColor: '#03204c',
    borderRadius: 20,
    padding: 4,
    width: 95,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    alignSelf: 'center',
    borderRadius: 5,
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  //Address
  AddressView: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  addressText: {
    backgroundColor: '#03204c',
    color: 'white',
    height: 20,
    borderRadius: 10,
    width: 50,
    textAlign: 'center',
  },
  inputAddress: {
    textAlignVertical: 'top',
    borderWidth: 0,
  },
  CurrentLocation: {
    marginTop: 3,
  },
  EditButton: {
    borderRadius: 10,
    alignSelf: 'center',
  },
  EditText: {
    color: 'black',
    textAlign: 'center',
  },

  // Modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    width: '80%',
    alignSelf: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
  },
  particularView: {
    backgroundColor: '#03204c',
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    padding: 2,
    width: 25,
  },
  clickedView: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    padding: 2,
    width: 25,
  },
  text:{
    backgroundColor: '#03204c',
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    padding: 2,
    width: 25,
    color:'white',
    textAlign:'center'
  },
  textClicked:{
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    padding: 2,
    width: 25,
    color:"white",
    textAlign:'center'
  }
})

export default BookingForm
