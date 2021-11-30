import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
const Map=()=> {
  return (
    <View style={{flex:1}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.916663,
          longitude:67.083333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1, //the container will fill the whole screen.
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default Map;