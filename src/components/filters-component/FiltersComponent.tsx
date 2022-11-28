import GenderComponent from "./gender-component/GenderComponent";
import SpeciesComponent from "./species-component/SpeciesComponent";
import StatusComponent from "./status-component/StatusComponent";

const FiltersComponent = ({setSearchStatus, setPagination, setGenderSearch, setSearchSpecies}) => {
  const clearFilters = () => {
    setSearchStatus('')
    setPagination('')
    setGenderSearch('')
    setSearchSpecies('')
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
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
      <div style={{cursor: 'pointer'}}  className="text-center text-primary" onClick={clearFilters}>
        Clear Filters
      </div>
    </div>
  )
};

export default FiltersComponent;
