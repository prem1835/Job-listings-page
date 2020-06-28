import React from "react";

const Filter = ({ filterState, removeFromFilter, removeFilter }) => {
  return (
    <div className="filter-aria justify-content-between filter-box mx-auto col-11 col-lg-10 d-flex">
      <div className="inside-filter-aria row mr-1">
        {filterState.map((filter) => {
          return (
            <div key={filter}>
              <button className="filter-btn my-2">{filter}</button>
              <i
                className="remove-single-filter fas fa-times"
                aria-hidden="true"
                onClick={() => removeFromFilter(filter)}
              ></i>
            </div>
          );
        })}
      </div>

      <div className="clear-filter my-auto" onClick={() => removeFilter()}>
        clear
      </div>
    </div>
  );
};

export default Filter;
