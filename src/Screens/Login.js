import React, {Component} from 'react';
import {Text,Image, TouchableOpacity,ScrollView, View, StyleSheet, TextInput, Button, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



import baseurl from '../common/BaseUrl';
import action from '../common/Api';
// import { StackNavigator } from "react-navigation";

const initialState = {
  email: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Login extends Component {

  state = initialState;

  componentWillUnmount() {}

  onEmailChange = email => {
    this.setState({email});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {email, password} = this.state;
    const payload = {email, password};
    
 
    // Show spinner when call is made
    this.setState({isLoading: true});

    action.post('/auth/login/', payload)
      .then((data)=>{
        
        
          if(data.data.success == true)
          {
              // console.log(data.data.data._id);
              // return false;
            // AsyncStorage.setItem('id', this.state.data.data.data._id);
            // AsyncStorage.setItem('name', this.state.data.data.data.name);
             
            this.props.navigation.navigate('Home')
            this.setState({isLoading: false, isAuthorized: true});
          
          }else{
            
            alert(data.data.message);
              // console.log(data.data.message);
          }
         
      })
      .catch((error)=>{
        
        console.log(error);
        // console.log(error && error.response);
        this.setState({errors: error, isLoading: false});
      });
  }


  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const {errors} = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }



render(){

  const { navigate } = this.props.navigation;
  
  return (
    <View style={{backgroundColor:'#FAF6F5', flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={{height:'100%', overflow:'hidden'}}>
    
    <View style={styles.TopView}>

    
    <Image
        style={styles.LOGO}
        source={require('../Assets/LOGO.jpg')}
      />
    </View>
    <View style={styles.BottomView}>
        <Text style={styles.LoginText}>Login Account</Text>
        <TextInput
        style={styles.input}
        placeholder="User Name or E-mail"
        
        placeholderTextColor="black"

        value={this.state.email}
            
            placeholder="Enter Email..."
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={event =>
              this.passwordInput.wrappedInstance.focus()
            }
            onChangeText={this.onEmailChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"



      />

      {this.getErrorMessageByField('email')}

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        
        placeholderTextColor="black"
        value={this.state.password}
            maxLength={40}
            placeholder="Enter password..."
            onChangeText={this.onPasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            onSubmitEditing={this.onPressLogin.bind(this)}
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
        
      />
      {this.getErrorMessageByField('password')}

      {this.getNonFieldErrorMessage()}

      <Text style={styles.forgotPass}>
        <TouchableOpacity 
        onPress={() => navigate('Forgot Password')}
      >
        <Text style={{color:'black'}}>Forgot Password?</Text>
      </TouchableOpacity></Text>
      <TouchableOpacity 
        onPress={this.onPressLogin.bind(this)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.ORMainView}>
      <View style={styles.ORFirstView} />
      <View>
    <Text style={styles.ORText}>OR</Text>
    </View>
    <View style={styles.ORSecondView} />
    </View>
    <View style={styles.EndView}>
       <Text style={styles.Endtext}> Don't have an account? </Text>
       <TouchableOpacity 
        onPress={() => navigate('SignUp')}
      >
        <Text style={styles.Endtext}> Register</Text>
      </TouchableOpacity>

    </View>
    </View>
    </View>
    </ScrollView>
    </View>
  );
};
}
const styles = StyleSheet.create({
  TopView: {
    backgroundColor:'#03204c',
    height:"80%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius:50 ,
    overflow: 'hidden',
    marginLeft:5,
    marginRight:5
  },
  LOGO:{
      width:200,
      height:100,
      alignSelf:'center',
      marginTop:'7%'
  },
  line:{
      width:200,
      backgroundColor:'white',
      height:1,
      margin:'auto',
      alignSelf:'center',
  },
  Bottomtext:{
      color:'white',
      textAlign:'center',
      flex:1,
  },
  BottomView:{
      bottom:'50%',
      backgroundColor:'white',
      height:'70%',
      width:'80%',
      alignSelf:'center',
      borderRadius:25,
      padding:'10%',
      color:'black',
      marginBottom:50,
      overflow: 'hidden',
  },
  LoginText:{
      textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:18
  },
  input:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop:'7%',
      marginBottom:'5%',
      padding:0,
      color:'black'
  },
  forgotPass:{
    marginTop:'2%',
    color:'black',
    textAlign:'right'
  },

  // LOGINBUTTON
  button:{
    backgroundColor:'#03204c',
    borderRadius:20,
    padding:'5%',
    marginTop:20,
    width:'80%',
    alignSelf:'center',
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  },
  // ORText

  ORMainView:{
      flexDirection: 'row',
      alignItems: 'center',
      margin:'14%'
  },
  ORFirstView:{
        flex: 1, 
        height: 1,
        backgroundColor: '#E0E0E0'
  },
  ORSecondView:{
          flex: 1,
          height: 1,
          backgroundColor: '#E0E0E0'
  },
  ORText:{
    color:'black',
    backgroundColor:'#E0E0E0',
    paddingLeft:5,
    paddingRight:5,
    marginLeft:5,
    marginRight:5,
    borderRadius:10,
  },
  // End portion
  EndView:{
    marginTop:'4%',
    flex:1,
    flexDirection:'row',
  },
  Endtext:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  
  },

  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },


  
});
export default Login;