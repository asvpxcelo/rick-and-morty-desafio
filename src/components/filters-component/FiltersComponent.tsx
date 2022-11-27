import React from "react";
import "./FiltersComponent.css";
import GenderComponent from "./Gender/GenderComponent";
import SpeciesComponent from "./Species/SpeciesComponent";
import StatusComponent from "./Status/StatusComponent";

const FiltersComponent = ({ setSearchStatus }) => {
  return (
    <div className="filters__component">
      <div className="filters__text__center">Filter</div>
      <div className="filters__text__center__clear">Clear Filters</div>
      <div className="accordion">
        <GenderComponent />
        <SpeciesComponent />
        <StatusComponent />
      </div>
    </div>
  );
};

export default FiltersComponent;
