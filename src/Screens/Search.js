import React,{useState} from 'react';
import {View, TextInput} from 'react-native';
import { Searchbar } from 'react-native-paper';

// const Search = (Messages) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const onChangeSearch = Messages => setSearchQuery(Messages);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };


const Search=()=>{
  const [text,setText]=useState('');
  const [filtered,setFiltered] =useState()
  const TextChange =(TextToChange)=>{
    console.log(TextToChange)
  }
  return(
    <View>
      <TextInput
        // style={styles.input}
        onChangeText={(Text)=>{
          TextChange(Text);
        }}
        placeholder="Search"
      />
    </View>
  )
}

export default Search;