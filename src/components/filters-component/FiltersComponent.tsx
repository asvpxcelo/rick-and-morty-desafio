import GenderComponent from "./gender-component/GenderComponent";
import SpeciesComponent from "./species-component/SpeciesComponent";
import StatusComponent from "./status-component/StatusComponent";

const FiltersComponent = () => {
  return (
    <div className="col-8">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div className="text-center text-primary text-decoration-underline">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <StatusComponent />
        <SpeciesComponent />
        <GenderComponent />
      </div>
    </div>
  )
};

export default FiltersComponent;
