import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import { assignLocations} from '../../redux/actions';
import { assignCurrentLocation } from '../../redux/actions';

export const LocationItem = (props) => {
    const location = props.savedLocation;
    const history = useSelector(state => state.locations);
    const dispatch = useDispatch();

    removeLocationFromHistory = (location) => {
        let newHistory = history.filter((item) => ((item.latitude !== location.latitude) && (item.longitude !== location.longitude)));
        dispatch(assignLocations(newHistory));
    }

    setCurrentLocation = (location) => {
        let coordinates = {latitude: location.latitude, longitude: location.longitude};
        dispatch(assignCurrentLocation(coordinates));
        props.navigation.navigate('Articles');
    }
   
    return (
        <View style={styles.location}>         
            <TouchableOpacity style={styles.info} onPress={() => setCurrentLocation(location)}>
                <Text style={styles.textStyle}>
                    Country: {location.country} 
                </Text>
                <Text style={styles.textStyle}>
                    City: {location.city}
                </Text>
                <Text style={styles.textStyle}>
                    Street: {location.street}
                </Text>    
            </TouchableOpacity>
            
            <View style={styles.deleteIcon}>
                <TouchableOpacity  onPress={() => removeLocationFromHistory(location)}>
                    <MaterialIcons
                        name={"delete"}
                        size={30}
                        color={"#762F2F"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: "80%",
        
    },
    deleteIcon: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "20%",
        marginRight: 40
    },
    location: {
        width: "100%",
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: '#202020',
        flexDirection: "row",
    },
    textStyle: {
        color: "white",
        fontSize: 14,
        fontFamily: "Courier",
        alignItems: "center",
    },
  })