import React from "react";
import Card from "./Card";

const CardList = ({ jsonData }) => {
  return (
    <div className="container mx-auto pb-5 mt-2 mt-lg-0 col-11 col-lg-10">
      <Card jsonData={jsonData} />
    </div>
  );
};

export default CardList;
