import  React,{useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../src/Screens/OnboardingScreen';
import HomeScreen from '../src/Screens/HomeScreen';
import Login from '../src/Screens/Login';
import SignUp from '../src/Screens/SignUp';
import ForgotPass from '../src/Screens/Forgot_Pass';
import Verify from '../src/Screens/Verify_Email';
import ChangePass from '../src/Screens/Change_Pass';
import AsyncStorage  from '@react-native-community/async-storage';
import FAQ from '../src/Screens/FAQ';
import Service from '../src/Screens/Service';
import TestimonialSection from '../src/Screens/testimonialSection';
import ServiceDetails from '../src/Screens/ServiceDetails';
import BookingForm from '../src/Screens/bookingform';
import Time from '../src/Screens/Time';
import DropDown from '../src/Screens/DropDown';
import Details from '../src/Screens/particularScreenDetails';
import Profile from '../src/Screens/Profile';
import EditProfile from '../src/Screens/EditProfile';
import UpdatePass from '../src/Screens/UpdatePass';
import Chat from '../src/Screens/Chat';
import MessagesScreen from '../src/Screens/Messages';
import HeaderImage from '../src/Screens/HeaderImage';
import DropdownChat from '../src/Screens/dropdownChat';
import Attachment from '../src/Screens/Attachment';
import Thankyou from '../src/Screens/thankyou';
import Map from '../src/Screens/Map';
import mainScreenSS from '../src/Screens/mainpage_selectedService';
import {CurrentSelectedService, PastSelectedService} from '../src/Screens/SelectedServices';
import MyDrawer from '../src/Screens/sideNav';

const Stack = createStackNavigator();
const AuthStack =()=> {

  const [isFirstLaunched, setIsFirstLaunched] =React.useState(null);
let routeName;
  useEffect(()=>{
    AsyncStorage.getItem('alreadylaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', "true");
        setIsFirstLaunched(true)
      }
      else{
        setIsFirstLaunched(false)}
    });
  },[]);

  if(setIsFirstLaunched === null){
      return null;
  }
  else if(setIsFirstLaunched === true){
      routeName='Onboarding'}
      else{
          routeName ='Home';      
        }
    return(
      <Stack.Navigator 
      initialRouteName={routeName}
      >
        <Stack.Screen
          options={navData => {
            return {
              headerShadowVisible: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navData.navigation.navigate('Home')}
                  style={{backgroundColor:'#03204c',marginRight:10, padding:7, borderRadius:15}}
                  >
                  <Text style={{color: '#fff'}}> Skip </Text>
                </TouchableOpacity>
              ),
            };
          }}
          name=" "
          component={OnBoardingScreen}
        />


        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Login" component={Login} />

          <Stack.Screen name="Home" component={HomeScreen} 
          options={{headerTitleAlign:'center'}} 
          />

        <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="SignUp" component={SignUp} />

          <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Forgot Password" component={ForgotPass} />
          
          <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Verify" component={Verify} />

          <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Change Password" component={ChangePass} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="FAQ" component={FAQ} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Service" component={Service} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="TestimonialSection" component={TestimonialSection} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Service Details" component={ServiceDetails} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Booking Form" component={BookingForm} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Time" component={Time} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="DropDown" component={DropDown} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="CurrentSelectedService" component={CurrentSelectedService} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="PastSelectedService" component={PastSelectedService} />

        <Stack.Screen 
        options={{headerTitleAlign:'center',  headerShadowVisible: false,}} 
          name="MainService" component={mainScreenSS} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Details" component={Details} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Profile" component={Profile} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Edit Profile" component={EditProfile} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Update Password" component={UpdatePass} />

        <Stack.Screen 
        options={({route})=>({
          title:<HeaderImage />,
          headerRight: () => (
              <DropdownChat />
              ),
        })} 
          name="ChatScreen" component={Chat} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Chat" component={MessagesScreen} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="DropdownChat" component={DropdownChat} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Attachment" component={Attachment} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Thankyou" component={Thankyou} />

        <Stack.Screen
        options={{headerTitleAlign:'center'}} 
        name="Map" component={Map} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="MyDrawer" component={MyDrawer} />

      </Stack.Navigator>
    );
  };
export default AuthStack;