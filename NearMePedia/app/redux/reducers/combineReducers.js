import { combineReducers } from 'redux'
import { articlesReducer } from "./articles.js"
import { favoriteArticlesReducer } from "./favoriteArticles"
import { locationsReducer } from "./locations"
import { currentCoordReducer } from "./currentCoord"

export default combineReducers({
    articles: articlesReducer,
    favoriteArticles: favoriteArticlesReducer,
    locations: locationsReducer,
    currentCoord: currentCoordReducer,
})