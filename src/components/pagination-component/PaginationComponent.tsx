import React from "react";
import { ICaracter } from "../../interfaces/Caracters";
import "./Pagination.css";

const PaginationComponent = ({name, age}: Array<IGetResult["info"]>) => {
  const nextPage = () => {
    console.log('alo')
  }

  const previousPage = () => {
    
  }
  
  return (
    <div className="container">
      <button className="button__next" onClick={nextPage}>Next</button>
      <button className="button_previous" onClick={previousPage}>Previous</button>
    </div>
  )
};

export default PaginationComponent;
