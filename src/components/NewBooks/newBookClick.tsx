import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Like from "../../helpers/like.tsx";
import Rating from "../../helpers/starsComponent.tsx";
import ShoppingCartBook from "../../helpers/shoppingCartBook.tsx";
import Likes from "../likes/headerLikes.tsx";
import Counter from "../../helpers/Counter.tsx";
import { useDispatch, useSelector } from "react-redux";
import { trueCountBook } from "../../redux/actions/action.ts";
import LikeTrue from "../../helpers/likeRedTrue.tsx";
import { trueLike } from "../../redux/actions/actionClickLike.ts";

const NewBookClick = () => {
  const { isbn13 } = useParams();
  const [currentItem, setCurrentItem] = useState({});

  const isTrue = useSelector((state) => state.bookRed.isTrue);

  const isValue = isTrue[isbn13];

  const isLikeTrueValue = useSelector((state) => state.likesRed.isLikeTrue)

  const isLike = isLikeTrueValue[isbn13]

  // console.log(isLike)

  const [propValueBook, setPropValueBook] = useState(isbn13);

  const [isAddedToCart, setIsAddedToCart] = useState(isValue);

  const dispatch = useDispatch();

  const handleLikeClickBook = () => {
    setIsAddedToCart(true);
    setPropValueBook(currentItem.isbn13);
  };


  const [propLike, setPropLike] = useState(isbn13);
  const [isLikeTrue, setIsLikeTrue] = useState(isLike);

  const handleIsLikeTrue = () =>{
    setIsLikeTrue(true)
    setPropLike(currentItem.isbn13)
  }

  const handelLikeClickFalse = () =>{
    setIsLikeTrue(false)
  }

  useEffect(() =>{
    dispatch(trueLike(isbn13, isLikeTrue))
  }, [isbn13, isLikeTrue])

  useEffect(() => {
    dispatch(trueCountBook(isbn13, isAddedToCart));
  }, [isbn13, isAddedToCart]);

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((json) => setCurrentItem(json));
  }, [isbn13]);

  const rating = currentItem.rating;

  return (
    <div className="newBookPage">
      <div className="newBookPageWrapper">
        <div className="newBookPageButtonBackWrapper">
          <Link to={"/"}>
            <button className="newBookPageButtonBack"></button>
          </Link>
        </div>
        <div className="newBookPageTitle">
          <h1>{currentItem.title}</h1>
        </div>
        <div className="newBookPageImagePriceWrapper">
          <div className="newBookPageImage">
            {isLikeTrue? (
             <LikeTrue  isbn13={propLike} onLikePropClick={handelLikeClickFalse}/>
            ):
            <Like onPropClick={handleIsLikeTrue} />
            }

            <img
              className="newBookPageImageImage"
              src={currentItem.image}
              alt=""
            />
          </div>
          <div className="newBookPagePriceWrapper">
            <div className="newBookPagePriceLikeWrapper">
              <div className="newBookPagePrice">{currentItem.price}</div>
              <div className="newBookPageRating">
                <Rating value={rating} />
              </div>
            </div>
            <div className="newBookPageAuthorsWrapper">
              <div className="newBookPageAuthors">Author: </div>
              <div className="newBookPageAuthorsName">
                {currentItem.authors}
              </div>
            </div>
            <div className="newBookPageAuthorsWrapper">
              <div className="newBookPageAuthors">Publisher:</div>
              <div className="newBookPageAuthorsName">
                {currentItem.publisher}, {currentItem.year}
              </div>
            </div>
            <div className="newBookPageAuthorsWrapper">
              <div className="newBookPageAuthors">Language:</div>
              <div className="newBookPageAuthorsName">
                {currentItem.language}
              </div>
            </div>
            <div className="newBookPageAuthorsWrapper">
              <div className="newBookPageAuthors">Pages:</div>
              <div className="newBookPageAuthorsName">{currentItem.pages}</div>
            </div>
            <div>
              {isAddedToCart ? (
                <Counter isbn13={propValueBook} />
              ) : (
                <ShoppingCartBook onPropClickBook={handleLikeClickBook} />
              )}
            </div>
          </div>
        </div>
        <div className="newBookPageDescTitle">{currentItem.desc}</div>
      </div>
    </div>
  );
};

export default NewBookClick;
