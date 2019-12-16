import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import { assignLocations} from '../../redux/actions';


export const LocationItem = ({savedLocation}) => {
    const location = savedLocation;
    const history = useSelector(state => state.locations);
    const dispatch = useDispatch();

    removeLocationFromHistory = (location) => {
        const newHistory = history.filter((item) => ((item.latitude !== location.latitude) && (item.longitude !== location.longitude)));
        dispatch(assignLocations(newHistory));
    }
   
    return (
        <View style={styles.location}>
            <View style={styles.info}>
                <Text style={styles.textStyle}>
                    Country: {location.country} 
                </Text>
                <Text style={styles.textStyle}>
                    City: {location.city}
                </Text>
                <Text style={styles.textStyle}>
                    Street: {location.street}
                </Text>
            </View>
            
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
        justifyContent: "center",
        width: 300
    },
    deleteIcon: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: 80
    },
    location: {
        width: 380,
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