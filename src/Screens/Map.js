import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { GOOGLE_PROVIDER, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';


const Map = () => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });

      
    })

    .catch((err) => {
      console.log(err);
      
    });
  }, []);
        return ( 
            <View style = {{ flex: 1 } } >
            <MapView provider = { GOOGLE_PROVIDER }
            style = { styles.map }
            region = {
                {  
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            > 
            <Marker
                coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
                }}
                pinColor="red"
            />
            </MapView>

            </View>
        );
    }
    //create our styling code:
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default Map;