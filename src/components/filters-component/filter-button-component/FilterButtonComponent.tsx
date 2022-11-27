import { FilterButton } from "../../../interfaces/FilterButton";


const FilterButtonComponent = ({index, name, items}) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          gender-0
          gender-1
          gender-2
        ></input>
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButtonComponent;
