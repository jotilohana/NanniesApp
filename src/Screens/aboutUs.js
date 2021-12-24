import React from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-player';
import axios from 'axios';

const API_URL = "https://evening-inlet-11817.herokuapp.com/";  

class App extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount()
    {
        this.callApi();
    }

    async callApi()
    {
            

        axios({
            method: 'get',
            url: `${API_URL}about`,
          }).then((response) => {
            // console.warn(response.data.data);
            this.setState({data:response.data.data});
          }).catch(err=>{
              console.warn(err);
          });


      
    }
    
    render()
    {
        return(
            <View style={{height:500,backgroundColor:"#03204c",borderRadius:25, margin:10,padding:10}}> 

           
                {
                    
                    <View>
                        {
                            this.state.data.map((item)=>
                            <VideoPlayer 
                                video={{uri:`${API_URL}${item.video}`}}
                                defaultMuted={true}
                                videoHeight={600}
                                videoWidth={800}
                                autoplay={true}
                                controls={true}
                                />
                            )
                        }
                    </View>
                }


          
            <View style={styles.textView}>

          
                <Text style={styles.text}>About Us</Text>
               
                {
                    
                    <View>
                        {
                            this.state.data.map((item)=>
                                <Text style={styles.Subtext}>{item.text} </Text>
                            )
                        }
                    </View>
                }

                {/* <Text style={styles.Subtext}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise */}
                                    {/* generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text> */}
                </View>
                <View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    img:{
        width:"100%",
        height:550
    },
    textView:{
        padding:20
    },
    text:{
        color:'white',
        fontSize:30,
    },
    Subtext:{
        color:"#fff"
    }

})
export default App;