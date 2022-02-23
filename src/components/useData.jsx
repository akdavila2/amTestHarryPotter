import React, { useState, useEffect } from "react";

const useData = (endPoint) => {
  const [ready, setReady] = useState();
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState([]);
 
  const API = `https://api-eromexico.herokuapp.com/${endPoint}`;
  const getData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setData(data);
      setReady(false);
      setFetching(false);
    } catch (error) {
      console.error("Generated error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return [ready, data, fetching];
};

export default useData;
