import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const useSpinner = apiCall => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await apiCall();
      setLoading(false);
    };
    fetchData();
  });

  return <div>{isLoading ? <FontAwesomeIcon icon={faFilm} /> : null}</div>;
};

export default useSpinner;
