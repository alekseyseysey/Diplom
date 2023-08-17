

export const BASE_URL = 'https://api.itbook.store/1.0/search'

export const actionTypesNewBooks = {
    GET_NEW_BOOKS_SUCCESS: "GET_NEW_POSTS_SUCCESS",
    GET_NEW_BOOKS_LOADING: "GET_NEW_POSTS_LOADING",
    GET_NEW_BOOKS_ERROR: "GET_NEW_POSTS_ERROR",
    GET_NEW_BOOKS_PAGINATION: "GET_NEW_POSTS_PAGINATION",
}



const getNewBooksSuccessAction = (payload) =>({
    type: actionTypesNewBooks.GET_NEW_BOOKS_SUCCESS,
    payload,
})

const getNewBooksLoadingAction = (payload:boolean) =>({
    type: actionTypesNewBooks.GET_NEW_BOOKS_LOADING,
    payload,
})

const getNewBooksPagination = (payload) =>({
    type: actionTypesNewBooks.GET_NEW_BOOKS_PAGINATION,
    payload,
})

const getNewBooksErrorAction = (payload) =>({
    type: actionTypesNewBooks.GET_NEW_BOOKS_ERROR,
    payload,
})

const fetchNewBooks = () =>{
    return (dispatch) =>{
        dispatch(getNewBooksLoadingAction(true))
        fetch("https://api.itbook.store/1.0/new")
        .then((response) => response.json())
        .then(data => {
            const books = data.books
        dispatch(getNewBooksSuccessAction(books))
        })
        .catch((error) => dispatch(getNewBooksErrorAction(error)))
        .finally(() => dispatch(getNewBooksLoadingAction(false)))
    };



};




export {
    fetchNewBooks,
}