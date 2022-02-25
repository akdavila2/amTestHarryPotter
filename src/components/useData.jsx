import { useState, useEffect } from "react";

const useData = (endPoint) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState([]);

  const API = `https://api-eromexico.herokuapp.com/${endPoint}`;
  const getData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data);
      setData(data);

      setFetching(false);
    } catch (error) {
      console.error("Generated error", error);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPoint]);
  return [data, fetching];
};

export default useData;
