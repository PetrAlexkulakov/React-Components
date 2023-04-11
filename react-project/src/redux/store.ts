import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { searchReducer } from './searchText';

export const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));
