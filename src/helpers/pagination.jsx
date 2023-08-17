import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ bookPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / bookPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginationWrapper">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="liPagination" key={number}>
           <Link to="/" className="page-link" onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Pagination;


