import React,{useState} from 'react';
import {View, TextInput} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';


const Search=()=>{
  const route =useRoute();
  // const Message = route.param.userName;
  const [text,setText]=useState('');
  const [filtered,setFiltered] =useState(userName);
  const [search, setSearch]=useState('');
  const searchedResult = (text)=>{
    if(text){
      const newData=filterData.filter(item => {
        const itemData = Message
          ? Message.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(DATA);
      setSearch(text);
    }
  };

  const TextChange =(TextToChange)=>{
    console.log(TextToChange)
  }
  return(
    <View style={{width:'100%', borderRadius:5, elevation:5, paddingLeft:20, marginBottom:15, backgroundColor:'#FBF9FC', flexDirection:'row'}}>
             <Image
              style={{marginTop:15}}
              source={require('../Assets/Search.png')}
              />
             <TextInput
            style={{marginLeft:25}}  
            onChangeText={text => searchedResult(text)} 
        placeholder="Search"
      />
        </View>
  )
}

export default Search;