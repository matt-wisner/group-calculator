import { useState, useEffect } from "react";
import CalcList from "./CalcList";
import useFetch from "./useFetch";
import Calculator from "./Calculator";

const Home = () => {
  const { calcs, error } = useFetch("http://localhost:8000/calcs");

  return (
    <div className="home">
      <Calculator />
      {error && <div>{error}</div>}
      <div className="calcListBack">
        <h2>Previous user calculations: </h2>
        {calcs && <CalcList calcs={calcs} />}
      </div>
    </div>
  );
};

export default Home;
