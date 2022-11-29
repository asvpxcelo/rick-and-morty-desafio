import React, { FC } from "react";
import { PaginationComponentProps } from "../../interfaces/Pagination";
import "./Pagination.css";
/**
 * Componente Pai de Paginação, avançar ou voltar de página
 */
const PaginationComponent: FC<PaginationComponentProps> = ({pagination, setPagination, isNextPage}) => {
  const goToNextPage = () => {
    setPagination(pagination + 1);
  }

  const goToPreviusPage = () => {
    setPagination(pagination - 1);
  }

  return (
    <div className="container">
      { pagination !== 1 && <button className="button__previous__page" onClick={goToPreviusPage}> Previous Page</button> }
      { isNextPage && <button className="button__next__page" onClick={goToNextPage}>Next Page</button> }
    </div>
  )
};

export default PaginationComponent;
