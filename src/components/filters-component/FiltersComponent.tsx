import GenderComponent from "./gender-component/GenderComponent";
import SpeciesComponent from "./species-component/SpeciesComponent";
import StatusComponent from "./status-component/StatusComponent";

/**
 * Componente pai que Recebe os filhos: Status/Species e Gender
 * Renderizando os três dentro de si com as props: setSearchStatus, setPagination, setGenderSearch, setSearchSpecies
 */
const FiltersComponent = ({setSearchStatus, setPagination, setGenderSearch, setSearchSpecies}) => {

  // Function para limpar filtros da tela
  const clearFilters = () => {
    setSearchStatus('')
    setPagination('')
    setGenderSearch('')
    setSearchSpecies('')
    window.location.reload();
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
