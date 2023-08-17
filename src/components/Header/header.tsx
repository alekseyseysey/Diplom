import React from "react";
import "../../styles/header.scss";
import { Link } from "react-router-dom";
import headerLikesImage from '../../pictures/heart.png'
import headerAccountImg from "../../pictures/computer-programmer.png";
import headerBooksStack from "../../pictures/books-stack.png";
import Search from "./hederInput.tsx";




const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="header">
        <div className="headerLogoBooksWrapper">
      <Link className="headerLogoBooks" to="/">BOOKSTORE</Link>
      </div>
      <Search/>
      {/* <div className="headerInputWrapper">
        <input type="text" className="headerInput" placeholder="Search" /> 
        </div> */}
        <div className="headerImageWrapper">
        <Link className="headerLikes" to="/Likes">
        <img className="headerLikesImage" src={headerLikesImage} alt="Likes" />
        </Link>
        <Link className="headerBooks" to="/shoppingCart">
        <img className="headerBooksImage" src={headerBooksStack} alt="Books" />
        </Link>
        <Link className="headerAccount" to="/Account">
        <img className="headerAccountImage" src={headerAccountImg} alt="Account" />
        </Link>
        </div>
      </div>
    </div>
  );
}


export default Header
