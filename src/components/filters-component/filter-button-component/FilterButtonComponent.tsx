import './FilterButton.css';

const FilterButtonComponent = ({index, name, items, setPagination, task}) => {
  return (
    <div>
      <div className="form-check">
        <input
        onClick={() => {
          setPagination(1)
          task(items)
        }}
          className="form-check-input x"
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
