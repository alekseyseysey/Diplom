import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, countBooks } from "../redux/actions/action.ts";


const Counter = ({ isbn13 }) => {
const [isbn, setIsbnBook] = useState(isbn13);
 const counter = useSelector((state) => state.bookRed.counters)
const isValueCounter = counter[isbn13] || 1

const [count, setCount] = useState(isValueCounter)




  const dispatch = useDispatch();




  useEffect(() => {
    setIsbnBook(isbn13);
  }, [isbn13]);

  useEffect(() => {
    dispatch(fetchBooks(isbn));
  }, [count, isbn]);


  useEffect(() =>{
    dispatch(countBooks(count, isbn))
  }, [count])


const increment = () =>{
  setCount(count + 1)
}

const decrement = () =>{
  if(count === 0){
    return count
  }
  else{
    setCount(count -1)
  }
}


  return (
    <div className="countWrapper">
      <button onClick={decrement} className="countDecrement">
        -
      </button>
      <div className="countNumber">
        {count}
      </div>
      <button onClick={increment} className="countIncrement">
        +
      </button>
    </div>

  )
  
  
};

export default Counter;
