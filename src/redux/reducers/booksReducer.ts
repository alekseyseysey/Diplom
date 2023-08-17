import { actionTypes } from "../actions/action.ts";

const defaultBooksState = {
  books: [],
  isLoading: false,
  errorBooks: "",
  counters: {},
  isTrue: {},
};

const booksReducer = (state = defaultBooksState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_SUCCESS:

      const existingBook = state.books.find((book) => book.isbn13 === action.payload.isbn13);
     if(!existingBook){
      return {  
        ...state,
         books:[...state.books, action.payload ],
      };
     }

     return state
     
     case actionTypes.GET_BOOKS_COUNT:

      return{
        ...state,
        counters: {
          ...state.counters,
          [action.payload.isbn13]: action.payload.count
        }
      }

      case actionTypes.GET_BOOKS_COUNT_TRUE:

        return{
          ...state,
          isTrue:{
            ...state.isTrue,
            [action.payload.isbn13]: action.payload.isAddedToCart
          }
        }

    case actionTypes.GET_BOOKS_LOADING:
      return { ...state, isLoading: action.payload };

    case actionTypes.GET_BOOKS_ERROR:
      return {...state, errorBooks: action.payload,};

    default:
      return state;
  }
};

export default booksReducer;
