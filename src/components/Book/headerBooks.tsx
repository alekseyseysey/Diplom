import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../../redux/actions/action.ts";
import "../../styles/main.scss";
import LoadingPage from "../../helpers/loadingPage.tsx";

const HeaderBooks = (props) => {
  // const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const books = useSelector((state) => state.bookRed.books);
  const isLoadingBooks = useSelector((state) => state.bookRed.isLoadingBooks);
  const errorBooks = useSelector((state) => state.bookRed.errorBooks);
  const counter = useSelector((state) => state.bookRed.counters)

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);


  const getCounterForBook = (isbn13) => {
    return counter[isbn13] || 1; 
  };

  return (
    <div className="booksWrapper">
      <div className="books">
        {isLoadingBooks && <><LoadingPage/></>}
        {errorBooks && <>{errorBooks}</>}
        {Array.isArray(books) &&
      books.map((item) => (
        <div
          className="newBooksWrapper"
          key={item.isbn13}
          onClick={() => navigate(`/${item.isbn13}`)}
        >
          <div className="newBookImg">
            <img src={item.image} alt="" />
          </div>
          <div className="countNumber">
          {getCounterForBook(item.isbn13)}
          </div>
          <div className="newBookTitle">{item.title}</div>
          <div className="newBookSubtitle">{item.subtitle}</div>
          <div className="newBookPrice">{item.price}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HeaderBooks;
