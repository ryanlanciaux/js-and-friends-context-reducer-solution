import { useState, useEffect, useMemo } from "react";

import { getCoffeeData } from "../api/getData";

function useCoffeeData() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filter, setFilter] = useState();
  const [filteredData, setFilteredData] = useState();

  useMemo(
    () =>
      filter
        ? setFilteredData(
            data.filter(
              item =>
                item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
            )
          )
        : setFilteredData(data),
    [data, filter]
  );

  useEffect(() => {
    setData([]);
    setLoading(true);
    setError(undefined);

    getCoffeeData()
      .then(items => {
        setLoading(false);
        setData(items);
      })
      .catch(error => setError(error));
  }, []);

  return { data: filteredData, isLoading, error, setFilter };
}

export default useCoffeeData;
