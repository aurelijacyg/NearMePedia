import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Article } from './Article';

const ScreenC = () => {
  const favoriteArticles = useSelector(state => state.favoriteArticles);
  
  return(
    <View>
        <Text style={styles.textStyle}>Reading List</Text> 
        <ScrollView contentContainerStyle={{ alignItems: "center"}} style={styles.scrollView}>
        {favoriteArticles.map(article => (
            <View style={styles.article} key = {article.title}>
                <Article article={article}/>
            </View>
        ))}
        
        </ScrollView>
    </View>
    );
    
}
export default ScreenC

const styles = StyleSheet.create({
  textStyle: {
    color: "grey",
    fontSize: 20,
    fontFamily: "Courier",
    marginTop: 10,
  },
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