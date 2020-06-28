import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import CardList from "./CardList";
import Data from "../data.json";

const App = () => {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(Data);

  // display jobs after filtering
  useEffect(() => {
    const filterdJobs = Data.filter(({ role, level, languages, tools }) => {
      return filter.every(
        (x) =>
          role.includes(x) ||
          level.includes(x) ||
          languages.includes(x) ||
          tools.includes(x)
      );
    });

    setData(filterdJobs);
  }, [filter]);

  const addToFilter = (filterValue) => {
    if (!filter.includes(filterValue)) {
      setFilter((filter) => [...filter, filterValue]);
    }
  };

  const removeFromFilter = (filterValue) => {
    setFilter((filter) => filter.filter((value) => value !== filterValue));
  };

  const removeFilter = () => {
    setFilter([]);
  };

  return (
    <React.Fragment>
      <header />
      {filter.length > 0 && (
        <Filter
          filterState={filter}
          removeFromFilter={removeFromFilter}
          removeFilter={removeFilter}
        />
      )}
      <CardList jsonData={data} addToFilter={addToFilter} />
    </React.Fragment>
  );
};

export default App;
