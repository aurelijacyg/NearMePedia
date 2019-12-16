export const articlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ASSIGN_ARTICLES_FROM_API':
            return action.payload
        default:
            return state
    }
}
