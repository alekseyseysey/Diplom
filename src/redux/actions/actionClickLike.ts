export const actionLikeClick = {
    GET_LIKE_SUCCESS: 'GET_LIKE_CLICK_SUCCESS',
    GET_LIKE_TRUE: 'GET_LIKE_TRUE'
}



const getLikeClick = (payload) => ({
    type: actionLikeClick.GET_LIKE_SUCCESS,
    payload,
})


const getLikeTrue = (payload) =>({
    type: actionLikeClick.GET_LIKE_TRUE,
    payload,
})



const fetchLike = (isbn13) =>{
    return (dispatch) =>{
        if (!isbn13){
            // console.log('bye')

            return;
        }
        fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then((response) => response.json())
        .then((json) => dispatch(getLikeClick(json)))
        // console.log('hello')
        
    };
};

const trueLike = (isbn13, isLikeTrue) =>{
    return(dispatch) =>{
        dispatch(getLikeTrue({isbn13, isLikeTrue}))
    }
}

export {
    fetchLike,
    trueLike
}