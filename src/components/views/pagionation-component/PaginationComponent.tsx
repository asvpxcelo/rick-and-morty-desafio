import React from "react";
import "./Pagination.css";

const PaginationComponent = ({ setPages }: any) => {
  const nextPage = () => {
    setPages((x) => x + 1);
  };

  const previusPage = () => {
    setPages((x) => x - 1);
  };
  return (
    <div className="container">
      <button className="button__next__page" onClick={nextPage}>
        Next Page
      </button>
      <button className="button__next__page" onClick={previusPage}>
        Previous Page
      </button>
    </div>
  );
};

export default PaginationComponent;
