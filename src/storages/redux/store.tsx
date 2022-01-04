//#region Imports

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import thunk from 'redux-thunk';
import REDUCERS from 'utils/constants/redux/reducers.json';
import animationBackdropReducer from './slices/animation-backdrop';
import snackbarReducer from './slices/snackbar';
import themeReducer from './slices/theme';
import userReducer from './slices/user';

//#endregion

const reducers: Reducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    snackbar: snackbarReducer,
    animationBackdrop: animationBackdropReducer
});

const persistedReducer: Reducer = persistReducer(
    {
        key: 'root',
        storage: AsyncStorage,
        whitelist: [REDUCERS.USER, REDUCERS.THEME]
    },
    reducers
);

const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor: Persistor = persistStore(store);

export default store;
