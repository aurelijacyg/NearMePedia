import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector} from 'react-redux';

import { Article } from './Article';

export const ArticlesList = () => {
    const articles = useSelector(state => state.articles);

    return(
        <ScrollView contentContainerStyle={{ alignItems: "center"}} style={styles.scrollView}>
        {articles.map(article => (
            <View style={styles.article} key = {Math.random()}>
                <Article article={article}/>
            </View>
        ))}     
        </ScrollView>
    );  
}

const styles = StyleSheet.create({
    article: {
        width: '100%',
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'black',
        borderWidth: 1,
        borderColor: '#202020',
    },
})
