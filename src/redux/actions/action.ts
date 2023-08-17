export const actionTypes = {
    GET_BOOKS_SUCCESS: "GET_POSTS_SUCCESS",
    GET_BOOKS_LOADING: "GET_POSTS_LOADING",
    GET_BOOKS_ERROR: "GET_POSTS_ERROR",
    GET_BOOKS_COUNT: "GET_COUNT_BOOKS",
    GET_BOOKS_COUNT_TRUE: "GET_BOOKS_COUNT_TRUE"
}


const getBooksSuccessAction = (payload) => ({
    type: actionTypes.GET_BOOKS_SUCCESS,
    payload,
});


const getCountBooksAction = (payload) => ({
    type: actionTypes.GET_BOOKS_COUNT,
    payload,
})

const getBooksLoadingAction = (payload:boolean) =>({
    type: actionTypes.GET_BOOKS_LOADING,
    payload,
});

const getBookErrorAction = (payload) =>({
    type: actionTypes.GET_BOOKS_ERROR,
    payload,
})

const getBookCountTrueAction = (payload) =>({
    type: actionTypes.GET_BOOKS_COUNT_TRUE,
    payload,
})


const fetchBooks = (isbn13) =>{
    return (dispatch) =>{
        if (!isbn13){

            return;
        }
        dispatch(getBooksLoadingAction(true))
        fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then((response) => response.json())
        .then((json) => dispatch(getBooksSuccessAction(json)))
        .catch((error) => dispatch(getBookErrorAction(error)))
        .finally(() => dispatch(getBooksLoadingAction(false)))
    };
};

const countBooks = (count, isbn13) =>{
     return(dispatch) => {
        dispatch(getCountBooksAction({isbn13, count}))
     }
    
}

const trueCountBook = (isbn13, isAddedToCart)=>{
    return(dispatch) => {
        dispatch(getBookCountTrueAction({isbn13, isAddedToCart}))
    }
}

export {
    fetchBooks,
    countBooks,
    trueCountBook
}