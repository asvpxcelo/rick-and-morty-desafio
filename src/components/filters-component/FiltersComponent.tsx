import GenderComponent from "./gender-component/GenderComponent";
import SpeciesComponent from "./species-component/SpeciesComponent";
import StatusComponent from "./status-component/StatusComponent";

const FiltersComponent = ({setSearchStatus, setPagination, setGenderSearch, setSearchSpecies}) => {
  return (
    <div className="col-8">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div className="text-center text-primary text-decoration-underline">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <StatusComponent 
        setPagination={setPagination}
        setSearchStatus={setSearchStatus}
        />
        <SpeciesComponent 
        setPagination={setPagination}
        setSearchSpecies={setSearchSpecies}
        />
        <GenderComponent
        setPagination={setPagination}
        setGenderSearch={setGenderSearch}
        />
      </div>
    </div>
  )
};

export default FiltersComponent;
