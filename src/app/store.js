import { combineReducers, configureStore } from '@reduxjs/toolkit';
import changeSelectionIdOfProposal from './features/selectionIdOfProposal';
import usersReducer from './features/usersReducer';
import userRoleSlice from './features/userRoleSlice';
import FetchSmthSlice from './features/FetchSmthSlice';
import storage from 'redux-persist/lib/storage';

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root', // the key under which it (state) is
  storage: storage, // we able to choose localStorage or session storage, //? check documentation
  blacklist: ['nameOfReducer'], // blacklist of reducers we dont want to save up in storage
};

//! Это могло не находится в этом комбайне, но только так персист этот будет корретктно работать
export const rootReducers = combineReducers({
  selectRoleAndFeaturesReducer: changeSelectionIdOfProposal, // its changing id of proposal selections
  usersReducer: usersReducer, // all requests here
  userRole: userRoleSlice, // switching roles here and "my reqs"
});

// modificating reducer for saving in storage. According `persistConfig` rules and using `rootReducers` reducers
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    fetchSlice: FetchSmthSlice,
  },
});
// creating persistor, which connects our store with functionality of saving in storage up
export const persistor = persistStore(store);
