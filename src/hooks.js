import { useState } from "react";
import axios from "axios";

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const toggleFlip = () => {
    setState((state) => !state);
  };
  return [state, toggleFlip];
};

const useAxios = (keys, baseUrl) => {
  const [res, setRes] = useState([]);
  const addResData = async (formatter = (data) => data, urlQuery = "") => {
    const response = await axios.get(`${baseUrl}${urlQuery}`);
    setRes((data) => [...data, formatter(response.data)]);
  };

  return [res, addResData];
};

export { useFlip, useAxios };
