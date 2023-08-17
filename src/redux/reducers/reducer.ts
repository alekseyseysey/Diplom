import { legacy_createStore as createStore, combineReducers } from 'redux';
import booksReducer from './booksReducer.ts';
import likesReducer from './likePageReducer.ts';
import newBooksReducer from './newBooksReducer.ts';
import searchReducer from './searchReducer.ts';

const reducer = combineReducers({
    bookRed: booksReducer,
    newBookRed: newBooksReducer,
    searchRed: searchReducer,
    likesRed: likesReducer,
  })


  export default reducer