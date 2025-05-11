import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./constant";

const MAX_RECORD_EACH_PAGE = 5;

const fetchData = async () => {
  const respStreamData = await fetch(API_ENDPOINT);
  const jsonResp = await respStreamData.json();
  return jsonResp;
};
const modifyDataForPagination = (data) => {
  const pageWiseData = [];
  let tempArr = [];
  data.forEach((obj, index) => {
    if (index !== 0 && index % MAX_RECORD_EACH_PAGE === 0) {
      pageWiseData.push(tempArr);
      tempArr = [];
    }
    tempArr.push(obj);
  });
  console.log(pageWiseData)
  return pageWiseData;
};
const useFetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAndSetData = async () => {
      const resp = await fetchData();
      setData(modifyDataForPagination(resp));
    };
    fetchAndSetData();
  }, []);

  return {
    data,
  };
};
export default useFetchData;

