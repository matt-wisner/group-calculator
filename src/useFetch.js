import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [calcs, setCalcs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setCalcs(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 1000);
  });

  return { calcs, error };
};

export default useFetch;
