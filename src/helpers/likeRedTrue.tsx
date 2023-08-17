import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLike } from "../redux/actions/actionClickLike.ts";

const LikeTrue = ({ isbn13, onLikePropClick }) => {
  const [isbn, setIsbn13] = useState(isbn13);

  useEffect(() => {
    setIsbn13(isbn13);
  }, [isbn13]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLike(isbn));
  }, [isbn13]);



  return (

  <div className="newBookPageLikeRedHeart" onClick={onLikePropClick}>
    
  </div>

  )
};

export default LikeTrue;
