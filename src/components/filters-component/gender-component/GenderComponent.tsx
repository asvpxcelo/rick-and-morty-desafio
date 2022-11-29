import FilterButtonComponent from "../filter-button-component/FilterButtonComponent";

/**
 * Componente que renderiza informações sobre Generos(Male, Female, Unknow, Genderless)
 * Recebe o componente pai FilterButton Componente e também
 * Recebe as props de paginação para preservar o filtro de página e de busca do Gênero
 */
const GenderComponent = ({ setPagination, setGenderSearch }) => {
  const genders = ["Male", "Female", "Unknow", "Genderless"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {genders.map((items, index) => (
              <FilterButtonComponent
                setPagination={setPagination}
                key={index}
                name="gender"
                index={index}
                items={items}
                task={setGenderSearch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderComponent;
