import FilterButtonComponent from "../filter-button-component/FilterButtonComponent";

const GenderComponent = ({setPagination, setGenderSearch}) => {
  const genders = ["Male", "Female", "Unknow", "Genderless"]
  return (
    <div>
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Gender
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {genders.map((items, index) =>
        <FilterButtonComponent
        setPagination={setPagination}
        key={index}
        name="gender"
        index={index}
        items={items}
        task={setGenderSearch}
         />
        )}
      </div>
    </div>
  </div>
</div>
  );
};

export default GenderComponent;
