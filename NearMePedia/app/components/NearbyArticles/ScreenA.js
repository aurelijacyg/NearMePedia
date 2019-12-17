import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { assignCurrentLocation } from '../../redux/actions';
import { assignArticlesFromApi } from '../../redux/actions';

import { ArticlesList } from './ArticlesList';

const ScreenA = () => {

    const [latitude, setLatitude] = useState("undef"); 
    const [longitude, setLongitude] = useState("undef");

    const dispatch = useDispatch();
    const currentCoord = useSelector(state => state.currentCoord);

    //used geolocation react native -> http://facebook.github.io/react-native/docs/geolocation.html    
    getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
			position => {
                setLatitude(JSON.stringify(position.coords.latitude));
                setLongitude(JSON.stringify(position.coords.longitude));
                let coordinates = {latitude: position.coords.latitude, longitude: position.coords.longitude};
                dispatch(assignCurrentLocation(coordinates));
			},
			error => alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    getWikiArticles = () => {
        //search for pages nearby (JS): https://www.mediawiki.org/wiki/API:Geosearch
        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            format: "json",
            list: "geosearch",
            gscoord: latitude+"|"+longitude,
            gsradius: "10000",
            gslimit: "10",
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                try {
                    var wikiArticles = response.query.geosearch;
                    dispatch(assignArticlesFromApi(wikiArticles));
                } catch {}
            })
            .catch(function(error){console.log(error);});
    }

    useEffect(()=>{
        if (currentCoord.latitude === undefined || currentCoord.longitude === undefined){
            this.getCoordinates();
        } else {
            setLatitude(JSON.stringify(currentCoord.latitude));
            setLongitude(JSON.stringify(currentCoord.longitude));
        }
        if (latitude !== "undef" && longitude !== "undef"){
            this.getWikiArticles(); 
        }
    })

    return(
        <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={styles.textStyle}>My GPS Coordinates </Text>
            <Text style={styles.textStyle}>latitude: {latitude} </Text> 
            <Text style={styles.textStyle}>longitude: {longitude}</Text>
            <ArticlesList />
        </View>
    )    
}

const styles = StyleSheet.create({
    textStyle: {
        color: "grey",
        fontSize: 17,
        fontFamily: "Courier",
    },
})

export default ScreenA