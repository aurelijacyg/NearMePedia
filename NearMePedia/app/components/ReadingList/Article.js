import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { assignArticles } from '../../redux/actions';

export const Article = ({article}) => {
    const favoriteArticles = useSelector(state => state.favoriteArticles);
    const coordinates = useSelector(state => state.currentCoord);

    const dispatch = useDispatch();

    removeArticleFromReadingList = (article) => {
        const newFavoriteArticles = favoriteArticles.filter((item) => (item.pageid !== article.pageid));
        dispatch(assignArticles(newFavoriteArticles));
    }

    getDistance = (article) => {
        let articleLat = article.lat;
        let articleLon = article.lon;
        let R = 6371; // radius of the Earth in km

        let dLat = toRad(coordinates.latitude-articleLat);
        let dLon = toRad(coordinates.longitude-articleLon);
        let lat1 = toRad(articleLat);
        let lat2 = toRad(coordinates.latitude);
  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        console.log("VALUE TYPE: ", typeof d)
        return d;
    }

    toRad = (value)  =>{
        return value * Math.PI / 180;
    }

    return (
        <View style={styles.article}>
            <View style = {styles.infoStyle}>
                <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/' + article.title.split(' ').join('_'))}>
                    <Text style={styles.articleTextStyle}>{article.title} </Text>
                </View>
                <Text style={styles.articleTextStyle}>Distance: {getDistance(article).toFixed(2)} km</Text>
            </View>
            
            <TouchableOpacity onPress={() => removeArticleFromReadingList(article)}>
                <Ionicons
                    name={"md-star"}
                    size={40}
                    color={"#762F2F"}
                />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    articleTextStyle: {
        color: "white",
        fontSize: 14,
        fontFamily: "Courier",
        alignItems: "center",
        margin: 15
    },
    infoStyle: {
        width: "80%"
    },
    article: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: '#202020'
    },
  })