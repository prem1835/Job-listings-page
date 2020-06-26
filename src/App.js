import React from "react";
import Filter from "./Filter";
import CardList from "./CardList";
import Data from "../data.json";

const App = () => {
  return (
    <React.Fragment>
      <header />
      <Filter />
      <CardList jsonData={Data} />
    </React.Fragment>
  );
};

export default App;
