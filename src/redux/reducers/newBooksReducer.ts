import { actionTypesNewBooks } from "../actions/actionNewBooks.ts";
import {actionTypesSearch} from "../actions/actionSearch.ts"

const defaultNewBooksState = {
  newBooks: [],
  newIsLoading: false,
  newErrorBooks: "",
};

const newBooksReducer = (state = defaultNewBooksState, action) => {
  switch (action.type) {
    case actionTypesNewBooks.GET_NEW_BOOKS_SUCCESS:
      return { ...state, newBooks: action.payload };

    case actionTypesNewBooks.GET_NEW_BOOKS_LOADING:
      return { ...state, newIsLoading: action.payload };

    case actionTypesNewBooks.GET_NEW_BOOKS_ERROR:
      return { ...state, newErrorBooks: action.payload };


      case actionTypesSearch.GET_NEW_BOOKS_PAGINATION: 
      return {
        ...state,
        newBooks: action.payload,
        newIsLoading: false,
        newErrorBooks: null,
      };
      

    default:
      return state;
  }
};

export default newBooksReducer;
