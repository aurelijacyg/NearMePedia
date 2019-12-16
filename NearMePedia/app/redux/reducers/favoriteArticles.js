export const favoriteArticlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_ARTICLE_TO_READING_LIST':
            return [...state, action.payload]
        case 'ASSIGN_ARTICLES':
            return action.payload
        default:
            return state
    }
}
