import FilterButtonComponent from "../filter-button-component/FilterButtonComponent";

const StatusComponent = ({ setPagination, setSearchStatus }) => {
  const status = ["Alive", "Dead", "Unknow"];
  return (
    <div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Status
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-3">
              {status.map((items, index) => (
                <FilterButtonComponent
                  task={setSearchStatus}
                  setPagination={setPagination}
                  key={index}
                  name="status"
                  index={index}
                  items={items}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default StatusComponent;
