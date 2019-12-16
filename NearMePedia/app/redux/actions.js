export const assignArticlesFromApi = (articles) => {
    return {
        type: 'ASSIGN_ARTICLES_FROM_API',
        payload: articles
    }
}

export const assignArticles = (articles) => {
    return {
        type: 'ASSIGN_ARTICLES',
        payload: articles
    }
}

export const addArticleToReadingList = (article) => {
    return {
        type: 'ADD_ARTICLE_TO_READING_LIST',
        payload: article
    }
}

export const assignCurrentLocation = (coordinates) => {
    return {
        type: 'ASSIGN_CURRENT_LOCATION',
        payload: coordinates
    }
}

export const addLocation = (location) => {
    return {
        type: 'ADD_LOCATION',
        payload: location
    }
}

export const assignLocations = (locations) => {
    return {
        type: 'ASSIGN_LOCATIONS',
        payload: locations
    }
}

