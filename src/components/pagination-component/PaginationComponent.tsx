import React, { FC } from "react";
import "./Pagination.css";

interface PaginationComponentProps  {
  pagination: number,
  setPagination: ((number) => void),
  isNextPage: boolean
}

const PaginationComponent: FC<PaginationComponentProps> = ({pagination, setPagination, isNextPage}) => {
  
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
