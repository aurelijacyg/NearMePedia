import React, { useState } from 'react';
import { Text, View, StyleSheet, Linking, Button, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { addArticleToReadingList } from '../../redux/actions';


export const Article = ({article}) => {
    const favoriteArticles = useSelector(state => state.favoriteArticles);
    const dispatch = useDispatch();

    checkArticles = (article) => {
        let list = favoriteArticles.filter((item) => article.pageid === item.pageid);
        if(list.length !== 0){
            return true;
        }
        else {
            return false;
        }
    }

    handleAdd = (article) => {
        let exists = checkArticles(article);
        if (exists === true){
            alert("This article is already in the reading list!");
        } else {
            dispatch(addArticleToReadingList(article));
        }
    }

    return (
        <View style={styles.article}>
            <View style={styles.infoStyle}>
                <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/' + article.title.split(' ').join('_'))}>
                    <Text style={styles.articleTextStyle}>{article.title} </Text>
                </View>
                <Text style={styles.articleTextStyle}>Distance: {article.dist} km</Text>
            </View>
            <TouchableOpacity onPress={() => handleAdd(article)}>
                <Ionicons
                    name={checkArticles(article) ? "md-star" : "md-star-outline"}
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
        margin: 15,
    },
    infoStyle: {
        width: "80%",
    },
    article: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        height: 120,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: '#202020',
    },
})
