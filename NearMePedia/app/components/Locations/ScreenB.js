import React from 'react';
import { View, StyleSheet, ScrollView, Text,Button } from 'react-native';
import { useSelector } from 'react-redux';

import { LocationItem } from './Location';
import { AddLocation } from "./AddLocation";

const ScreenB = (props) => {
    const savedLocations = useSelector(state => state.locations);

    return(
      <View>
        <Text style={styles.textStyle}>Set Location</Text> 
        <AddLocation navigation ={props.navigation}/>
        
        <Text style={styles.textStyle}>History</Text> 
        <ScrollView contentContainerStyle={{ alignItems: "center"}} style={styles.scrollView}>
          {savedLocations.map(savedLocation => (
            <View key = {Math.random()}>
                <LocationItem savedLocation={savedLocation}/>
            </View>
          ))}
        </ScrollView>
      </View>
    )
}

export default ScreenB

const styles = StyleSheet.create({
  textStyle: {
    color: "grey",
    fontSize: 20,
    fontFamily: "Courier",
    marginTop: 15,
  },
})