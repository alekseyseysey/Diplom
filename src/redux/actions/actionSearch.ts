export const BASE_URL = 'https://api.itbook.store/1.0/search'

export const actionTypesSearch = {
    GET_NEW_BOOKS_LOADING: "GET_NEW_POSTS_LOADING",
    GET_NEW_BOOKS_ERROR: "GET_NEW_POSTS_ERROR",
    GET_NEW_BOOKS_PAGINATION: "GET_NEW_POSTS_PAGINATION",
    GET_NEW_BOOKS_RESET: "GET_NEW_POSTS_RESET"
}





const getNewBooksLoadingAction = (payload:boolean) =>({
    type: actionTypesSearch.GET_NEW_BOOKS_LOADING,
    payload,
})


const getNewBooksErrorAction = (payload) =>({
    type: actionTypesSearch.GET_NEW_BOOKS_ERROR,
    payload,
})


const getNewBooksPagination = (payload) =>({
    type: actionTypesSearch.GET_NEW_BOOKS_PAGINATION,
    payload,
})



const fetchSearch = (query) =>{
    return (dispatch) =>{
        dispatch(getNewBooksLoadingAction(true))
        fetch(BASE_URL + `/query=${query}`)
        .then((response) => response.json())
        .then(data => {
            const books = data.books
        dispatch(getNewBooksPagination(books))
        })
        .catch((error) => dispatch(getNewBooksErrorAction(error)))
        .finally(() => dispatch(getNewBooksLoadingAction(false)))
    };



};

export {
    fetchSearch,
}