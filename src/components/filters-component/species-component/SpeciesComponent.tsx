import FilterButtonComponent from "../filter-button-component/FilterButtonComponent";

/**
 * Componente que renderiza informações sobre Generos(Human, Alien, Humanoid, Poopybutthole, Mythological, Unknown, Animal, Disease, Robot, Cronenberg, Planet)
 * Recebe o componente pai FilterButton Componente e também
 * Recebe as props de paginação para preservar o filtro de página e de busca do Gênero
 */
const SpeciesComponent = ({setPagination, setSearchSpecies}) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterButtonComponent
            task={setSearchSpecies}
            setPagination={setPagination}
              index={index}
              name='Species'
              items={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeciesComponent;
