import React from 'react';  
import {StyleSheet, View, Text} from 'react-native';  
import Constants from 'expo-constants';

import {Provider} from 'react-redux';
import store from './app/redux/store';

import Navigation from './app/components/Navigation'; 

export default class App extends React.Component {
    render (){
        return( 
            <Provider store={store}> 
                <View style={styles.mainContainer}> 
                <Text style={styles.mainText}>NearMePedia</Text>
                    <Navigation />
                </View> 
            </Provider>
        )  
    }
}

const styles = StyleSheet.create({  
    mainContainer: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight,
    },
    mainText: {
        color: "#762F2F",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "Courier",
    },
});  

