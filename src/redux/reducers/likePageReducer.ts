import {actionLikeClick} from "../actions/actionClickLike.ts"

const defaultLikeState={
    likesBooks: [],
    isLikeTrue: {},

}



const likesReducer = (state = defaultLikeState, action) =>{
    switch(action.type){
        case actionLikeClick.GET_LIKE_SUCCESS:
            const existingLike = state.likesBooks.find((like)=> like.isbn13 === action.payload.isbn13)
            if(!existingLike){
                
                return{
                    ...state,
                    likesBooks:[...state.likesBooks, action.payload]
                }
            }
            return state

            case actionLikeClick.GET_LIKE_TRUE:
                console.log(state.likesBooks)
                // console.log(state.isLikeTrue)
                return{
                    ...state,
                    isLikeTrue:{
                        ...state.isLikeTrue,
                        [action.payload.isbn13]: action.payload.isLikeTrue
                    }
                }
            default:
                return state;
    }
}



export default likesReducer