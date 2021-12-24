import React ,{Component}from 'react';
import {Text,Image, TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Container} from 'react-native';

import baseurl from '../common/BaseUrl';
import action from '../common/Api';

var FormData = require('form-data');


const initialState = {
  name:"",
  email:"",
  password:"",
  cpassword:"",
  errors:{},
  isAuthorised:false,
  isLoading:false
}



class SignUp extends Component{

      state = initialState;
      componentWillUnmount(){}

      onnameChange = name=>{
        this.setState({name})
      }

      onEmailChange = email=>{
        this.setState({email})
      }

      onPasswordChange = password=>{
        this.setState({password})
      }

      onConfirmPassword = cpassword=>{
        this.setState({cpassword})
      }

      onPressSignUp(){

        const {name,email,password,cpassword} = this.state;

        // const payload = {name,email,password,usertype:"3"}

        if(name =='' || email =='' || password =='' ||cpassword =='')
        {
          alert('Please Insert All Fields');
        }

        if(password != cpassword)
        {
          alert('Your Confirm Password Does Not Match');
        }

        // console.log(payload);

        this.setState({isLoading:true})

        var payload = new FormData();
        payload.append('name', name);
        payload.append('email', email);
        payload.append('password', password);
        payload.append('usertype', '3');

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
        }

        action.post('/auth/register/admin', payload,headers).then((data)=>{
          
          if(data.data.success == true)
          {
            this.props.navigation.navigate('Home')
            this.setState({isLoading: false, isAuthorized: true});

          }else{
            alert(data.data.message);
          }
        }).catch((error)=>{
            console.log(error)
        })

       
         

          // var config = {
          //   method: 'post',
          //   url: 'https://evening-inlet-11817.herokuapp.com/auth/register/admin',
          //   headers: { 
            
          //   },
          //   data : data
          // };

          // axios(config)
          // .then(function (response) {
          //   console.log(JSON.stringify(response.data));
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });


      }

render() {

 

  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={{height:'100%', overflow:'hidden'}}>
    <View style={styles.TopView}>
    <Image
        style={styles.LOGO}
        source={require('../Assets/LOGO.jpg')}
      />
    </View>
    <View style={styles.BottomView}>
        <Text style={styles.LoginText}>Sign-Up</Text>
        
        <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="black"
        value={this.state.name}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType='next'
        onChangeText={this.onnameChange}
        blurOnSubmit
        onSubmitEditing={this.onPressSignUp.bind(this)}
       
        underlineColorAndroid="transparent"
        placeholderTextColor="#999"


      />
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType={'email-address'}
        placeholderTextColor="black"
        value={this.state.email}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType='next'
        onChangeText={this.onEmailChange}
        blurOnSubmit
        onSubmitEditing={this.onPressSignUp.bind(this)}
      
        underlineColorAndroid="transparent"
        placeholderTextColor="#999"

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType={'password'}
        placeholderTextColor="black"
        secureTextEntry={true}
        value={this.state.password}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType='next'
        onChangeText={this.onPasswordChange}
        blurOnSubmit
        onSubmitEditing={this.onPressSignUp.bind(this)}
        secureTextEntry
        underlineColorAndroid="transparent"
        placeholderTextColor="#999"


      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType={'password'}
        placeholderTextColor="black"
        secureTextEntry={true}
        value={this.state.cpassword}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType='done'
        onChangeText={this.onConfirmPassword}
        blurOnSubmit
        onSubmitEditing={this.onPressSignUp.bind(this)}
        secureTextEntry
        underlineColorAndroid="transparent"
        placeholderTextColor="#999"


      />
      
      <TouchableOpacity 
       onPress={this.onPressSignUp.bind(this)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign-Up</Text>
      </TouchableOpacity>
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
    marginLeft:5,
    marginRight:5,
    overflow: 'hidden',
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
      borderBottomRightRadius:20,
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
    marginBottom:'10%'
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  }
 
});
export default SignUp;