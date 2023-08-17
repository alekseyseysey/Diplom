import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/action.ts";

const ShoppingCartBook = ({onPropClickBook }) => {

  return (
    <div className="newBookPageUrl">
      <button className="newBookPageButtonAdd" onClick={onPropClickBook}>
        ADD TO CART
      </button>
    </div>
  );
};



export default ShoppingCartBook;

