import React, { FC } from "react";
import { PaginationComponentProps } from "../../interfaces/Pagination";
import "./Pagination.css";


const PaginationComponent: FC<PaginationComponentProps> = ({pagination, setPagination, isNextPage}) => {
  console.log(pagination);
  const goToNextPage = () => {
    setPagination(pagination + 1);
  }

  const goToPreviusPage = () => {
    setPagination(pagination - 1);
  }

  return (
    <div className="container">
      { pagination !== 1 && <button className="" onClick={goToPreviusPage}> Previous Page</button> }
      { isNextPage && <button className="" onClick={goToNextPage}>Next Page</button> }
    </div>
  )
};

export default PaginationComponent;
