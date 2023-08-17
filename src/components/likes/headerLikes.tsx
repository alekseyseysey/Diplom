import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLike } from "../../redux/actions/actionClickLike.ts";

import  "../../styles/main.scss"


const Likes = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();


const likeBooks = useSelector((state) => state.likesRed.likesBooks);

useEffect(() =>{
    dispatch(fetchLike());
}, [])


    return (
        <div className="likesWrapper">

{Array.isArray(likeBooks) &&
      likeBooks.map((item) => (
        <div
          className="newBooksWrapper"
          key={item.isbn13}
          onClick={() => navigate(`/${item.isbn13}`)}
        >
          <div className="newBookImg">
            <img src={item.image} alt="" />
          </div>
          <div className="newBookTitle">{item.title}</div>
          <div className="newBookSubtitle">{item.subtitle}</div>
          <div className="newBookPrice">{item.price}</div>
        </div>
      ))}


        </div>

   
    )
}


export default Likes

