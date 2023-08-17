import { actionTypesSearch } from "../actions/actionSearch.ts";

const defaultSearchState = {
  searchBooks: [],
  searchIsLoading: false,
  searchError: "",
};

const searchReducer = (state = defaultSearchState, action) => {
  switch (action.type) {
    case actionTypesSearch.GET_NEW_BOOKS_PAGINATION:
      return { ...state, searchBooks: action.payload };

    case actionTypesSearch.GET_NEW_BOOKS_LOADING:
      return { ...state, searchIsLoading: action.payload };

    case actionTypesSearch.GET_NEW_BOOKS_ERROR:
      return { ...state, searchError: action.payload };

      
    default:
      return state;
  }
};


export default searchReducer;