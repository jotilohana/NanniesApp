import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import OnBoardingScreen from '../src/Screens/OnboardingScreen'
import HomeScreen from '../src/Screens/HomeScreen'
import Login from '../src/Screens/Login'
import SignUp from '../src/Screens/SignUp'
import ForgotPass from '../src/Screens/Forgot_Pass'
import Verify from '../src/Screens/Verify_Email'
import ChangePass from '../src/Screens/Change_Pass'
import AsyncStorage from '@react-native-community/async-storage'
import FAQ from '../src/Screens/FAQ'
import Service from '../src/Screens/Service'
import TestimonialSection from '../src/Screens/testimonialSection'
import ServiceDetails from '../src/Screens/ServiceDetails'
import BookingForm from '../src/Screens/bookingform'
import Time from '../src/Screens/Time';
import Date from '../src/Screens/date';
import DropDown from '../src/Screens/DropDown'
import Details from '../src/Screens/particularScreenDetails'
import Profile from '../src/Screens/Profile'
import EditProfile from '../src/Screens/EditProfile'
import UpdatePass from '../src/Screens/UpdatePass'
import Chat from '../src/Screens/Chat'
import MessagesScreen from '../src/Screens/Messages'
import HeaderImage from '../src/Screens/HeaderImage'
import DropdownChat from '../src/Screens/dropdownChat'
import Attachment from '../src/Screens/Attachment'
import Thankyou from '../src/Screens/thankyou'
import Map from '../src/Screens/Map'
import mainScreenSS from '../src/Screens/mainpage_selectedService'
import Review from '../src/Screens/review'
import ChangeAddress from '../src/Screens/ChangeAddress'
import AddAddress from '../src/Screens/AddAddress'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchBar from '../src/Screens/Searchbar';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DrawerContent from '../src/components/DrawerContent';

const HomeStack = createStackNavigator()
const HomeStackStack = ({route, navigation}) => {
  const tabHiddenRoutes = ["Chat","ChatScreen", 'Forgot Password',  "OnBoardingScreen", 'Login', 'Verify'];

  if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
    navigation.setOptions({tabBarStyle: {display: 'none'},}); } 
   else {
   navigation.setOptions({tabBarStyle: {display: 'flex'},});
  }
  const [isFirstLaunched, setIsFirstLaunched] = React.useState(null)
  let routeName
  useEffect(() => {
    AsyncStorage.getItem('alreadylaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunched(true)
      } else {
        setIsFirstLaunched(false)
      }
    })
  }, [])

  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    routeName = 'Onboarding'
  } else {
    routeName = 'Home'
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={navData => {
          return {
            headerTintColor:"white",
            headerShadowVisible:false,
            tabBarStyle: {display: 'none'},
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navData.navigation.navigate('Home')}
                style={{
                  backgroundColor: '#03204c',
                  marginRight: 10,
                  padding: 5,
                  borderRadius: 15,
                }}>
                <Text style={{color: '#fff'}}> Skip </Text>
              </TouchableOpacity>
            ),
          }
        }}
        name='OnBoarding'
        component={OnBoardingScreen}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Login'
        component={Login}
      />      
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='SignUp'
        component={SignUp}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Home'
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Forgot Password'
        component={ForgotPass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Verify'
        component={Verify}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Change Password'
        component={ChangePass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='FAQ'
        component={FAQ}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Service'
        component={Service}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='TestimonialSection'
        component={TestimonialSection}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Service Details'
        component={ServiceDetails}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Booking Form'
        component={BookingForm}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Time'
        component={Time}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='DropDown'
        component={DropDown}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='MainService'
        component={mainScreenSS}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Details'
        component={Details}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Profile'
        component={Profile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Edit Profile'
        component={EditProfile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Update Password'
        component={UpdatePass}
      />

      <HomeStack.Screen
        options={({route}) => ({
          title: <HeaderImage />,
          headerRight: () => <DropdownChat />,
          tabBarStyle: {display: 'none'},
        })}
        name='ChatScreen'
        component={Chat}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', tabBarStyle: {display: 'none'}}}
        name='Chat'
        component={MessagesScreen}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='DropdownChat'
        component={DropdownChat}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Attachment'
        component={Attachment}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Thankyou'
        component={Thankyou}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Map'
        component={Map}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Review'
        component={Review}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='Change address'
        component={ChangeAddress}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name='AddAddress'
        component={AddAddress}
      />
    </HomeStack.Navigator>
  )
}

const ChatStack = createStackNavigator()
const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name='Chat' component={MessagesScreen} />
      <ChatStack.Screen
        options={{
          tabBarStyle: {display: 'none'},
          title: <HeaderImage />,
          headerRight: () => <DropdownChat />,
        }}
        name='ChatScreen'
        component={Chat}
      />
      <ChatStack.Screen
        options={{headerShown: 'false'}}
        name='DropDown'
        component={DropdownChat}
      />
      <ChatStack.Screen
        options={{headerShown: 'false'}}
        name='HeaderImage'
        component={HeaderImage}
      />
      <ChatStack.Screen
        options={{headerShown: 'false'}}
        name='SearchBar'
        component={SearchBar}
      />
    </ChatStack.Navigator>
  )
}
const Tabs = createBottomTabNavigator()
const TabsScreen = () => {
  return (
    <Tabs.Navigator
    barStyle={{backgroundColor: '#0047AB'}}
    tabBarOptions={{
      activeTintColor: '#03204c',
      inactiveTintColor: 'grey',
    }}
    screenOptions={{
        tabBarStyle: {height: 40},
      }}
      initialRouteName='Home'
      >
         <Tabs.Screen
        name='Services'
        component={Service}
        options={{
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Services',
          tabBarIcon: ({color}) => (
            <Icon name='build' color={color} size={24} />
          ),
        }}
      />
       <Tabs.Screen
        name='Chat'
        component={ChatStackScreen}
        options={{
          tabBarStyle: {display: 'none'},
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <Icon name='chatbubbles' color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name='Home'
        component={HomeStackStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        tabBarIcon: ({ home,color, size }) => {
        const icon=home?"Login":"home";
        return (
        <Icon name={icon} color={color} size={size} />
      )
      },
        }}
      />
      <Tabs.Screen
        name='Booking'
        component={mainScreenSS}
        options={{
          headerTitleAlign:'center',
          tabBarColor: '#03204c',
          tabBarLabel: 'Booking',
          tabBarIcon: ({color}) => (
            <Icon name='checkmark-done-circle' color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name='Account'
        component={Profile}
        options={{
          tabBarStyle: {display: 'none'},
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name='people' color={color} size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

const Drawer = createDrawerNavigator()
const AuthStack = () => (
  <Drawer.Navigator initialRouteName='Home'
  drawerContent={props => <DrawerContent {...props} />}
  >
    <Drawer.Screen options={{headerShown: false}} name='Home'component={TabsScreen}/>
    <Drawer.Screen options={{headerShown: false}} name='Services' component={Service} />
    <Drawer.Screen options={{headerShown: false}} name='Account' component={FAQ} />
    <Drawer.Screen options={{headerShown: false}} name='Chats' component={ChatStackScreen} />
    <Drawer.Screen options={{headerShown: false}} name='Booking' component={FAQ} />
    <Drawer.Screen options={{headerShown: false}} name='FAQ' component={FAQ} />
    <Drawer.Screen options={{headerShown: false}} name='Logout' component={FAQ} />
  </Drawer.Navigator>
)

export default AuthStack
