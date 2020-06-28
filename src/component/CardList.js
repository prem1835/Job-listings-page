import React from "react";
import Card from "./Card";

const CardList = ({ jsonData, addToFilter }) => {
  return (
    <div className="container mx-auto pb-5 mt-2 mt-lg-0 col-11 col-lg-10">
      <Card jsonData={jsonData} addToFilter={addToFilter} />
    </div>
  );
};

export default CardList;
