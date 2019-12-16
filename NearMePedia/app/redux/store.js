import { createStore } from 'redux'
import rootReducer from './reducers/combineReducers.js'

import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default store = createStore(persistedReducer)
export const persistor = persistStore(store);