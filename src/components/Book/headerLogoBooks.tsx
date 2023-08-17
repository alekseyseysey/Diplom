import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNewBooks } from "../../redux/actions/actionNewBooks.ts";
import "../../styles/main.scss";
import Pagination from "../../helpers/pagination.jsx";
import NewBookPage from "./newBookPage.tsx";
import Search from "../Header/hederInput.tsx";


 
const LogoBooks = () => {
  const dispatch = useDispatch();

  const newBooks = useSelector((state) => state.newBookRed.newBooks);
  const newIsLoading = useSelector((state) => state.newBookRed.newIsLoading);
  const newErrorBooks = useSelector((state) => state.newBookRed.newErrorBooks);



  const [currentPage, setCurrentPage] = useState(1);
  const bookPerPage = 12

  


  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);



  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const lastBookIndex = currentPage * bookPerPage
  const firstBookIndex = lastBookIndex - bookPerPage
  const currentBook = newBooks.slice(firstBookIndex, lastBookIndex)

  
  

  return (
    <div className="booksWrapper">
     <NewBookPage 
      newIsLoading={newIsLoading}
      newErrorBooks={newErrorBooks}
      currentBook={currentBook}
      />
      <Pagination bookPerPage={bookPerPage} 
          totalBooks={newBooks.length}
          paginate={paginate}
          currentPage={currentPage}
          />
    </div>
  ); 
};

export default LogoBooks;

