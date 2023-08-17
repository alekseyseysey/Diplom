import React from "react";
import LoadingPage from "../../helpers/loadingPage.tsx";
import { useNavigate } from "react-router-dom";
import "../../styles/main.scss";




const NewBookPage = ( {newIsLoading, newErrorBooks, currentBook} ) =>{

  const navigate = useNavigate();




  return(

    <div className="logoBooks">
    {newIsLoading && (
      <>
        <LoadingPage />
      </>
    )}
    {newErrorBooks && <div className="error">{newErrorBooks}</div>}
    {Array.isArray(currentBook) &&
      currentBook.map((item) => (
        <div
          className="newBooksWrapper"
          key={item.isbn13}
          onClick={() => { navigate(`/${item.isbn13}`)}}
        >
          <div className="newBookImg">
            <img className="imgLogo" src={item.image} alt="" />
          </div>
          <div className="newBookTitle">{item.title}</div>
          <div className="newBookSubtitle">{item.subtitle}</div>
          <div className="newBookPrice">{item.price}</div>
        </div>
      ))}
     
  </div>
  )
}


export default NewBookPage

