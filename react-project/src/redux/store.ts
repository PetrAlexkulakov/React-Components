import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { searchReducer } from './searchText';
import { configureStore } from '@reduxjs/toolkit';
import { rickApi } from './fetch/rickApi';

const rootReducer = combineReducers({
  searchText: searchReducer,
  [rickApi.reducerPath]: rickApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickApi.middleware),
  });
};

export const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));
