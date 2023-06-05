import { combineReducers } from 'redux';
import { searchReducer } from './searchText';
import { configureStore } from '@reduxjs/toolkit';
import { rickApi } from './fetch/rickApi';
import { searchResultReducer } from './searchResult';
import { allFormsReducer } from './allForms';

const rootReducer = combineReducers({
  searchText: searchReducer,
  allForms: allFormsReducer,
  searchResult: searchResultReducer,
  [rickApi.reducerPath]: rickApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickApi.middleware),
  });
};
