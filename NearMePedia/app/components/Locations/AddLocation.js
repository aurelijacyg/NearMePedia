import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Location from 'expo-location';

import { addLocation} from '../../redux/actions';
import { assignCurrentLocation } from '../../redux/actions';

export const AddLocation = (props) => {
    const [value, setValue] = useState('');

    const locationsHistory = useSelector(state => state.locations);
    const dispatch = useDispatch();

    checkHistory = (location) => {
      let list = locationsHistory.filter((item) => (location.latitude === item.latitude) && (location.longitude === item.longitude));
      if(list.length !== 0){
          return true;
      }
      else {
          return false;
      }
    }

    saveLocation = async address => {
      let result = await Location.geocodeAsync(value);
      coordinates = {latitude: result[0].latitude, longitude: result[0].longitude}

      if (result.length != 0) {
        getAddressFromCoordAndSaveState(coordinates);
        props.navigation.navigate('Articles')
      }
    }

    getAddressFromCoordAndSaveState = async location => {
      let addr = await Location.reverseGeocodeAsync({
        latitude: location.latitude,
        longitude: location.longitude
      });
  
      if (addr[0].country !== undefined) {
        let locationToSave = {
          latitude: location.latitude,
          longitude: location.longitude,
          country: addr[0].country,
          city: addr[0].city,
          street: addr[0].street
        };

        let exists = checkHistory(locationToSave);
        if (exists === false) {
          dispatch(addLocation(locationToSave));
        } 
        dispatch(assignCurrentLocation(locationToSave));
      }
    };


  assignCurrentLoc = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
          let coordinates = {latitude: position.coords.latitude, longitude: position.coords.longitude}
          getAddressFromCoordAndSaveState(coordinates);
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  props.navigation.navigate('Articles')
  };

    return (
        <View style={styles.addLocationView}>
          <View style={styles.container}>
            <View style={styles.textInputView}>
              <TextInput 
                placeholder="Enter address"
                fontSize="15"
                placeholderTextColor="white"
                color="white"
                value={value}
                onChangeText={value => setValue(value)}
              />   
            </View>
            <Button color="#762F2F" title="Set" onPress={()=>saveLocation()} />
          </View>
          
          <Button color="#762F2F" title="Set current position by GPS coordinates" onPress={()=>assignCurrentLoc()} />
        </View>
    )
}


const styles = StyleSheet.create({
    textInputView: {
      backgroundColor:'#181818',
      width: '80%',
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "black",
      margin: 10,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    addLocationView: {
      width: '100%',
      height: 120,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#181818',
    },
  })