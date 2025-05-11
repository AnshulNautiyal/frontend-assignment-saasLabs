import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./constant";
import type { PaginatedData } from "./types";

const MAX_RECORD_EACH_PAGE = 5;

const fetchData = async () => {
  const respStreamData = await fetch(API_ENDPOINT);
  const jsonResp = await respStreamData.json();
  return jsonResp;
};
const modifyDataForPagination = (data: PaginatedData): PaginatedData[] => {
  const pageWiseData: PaginatedData[] = [];
  let tempArr: PaginatedData = [];

  data.forEach((obj, index) => {
    if (index !== 0 && index % MAX_RECORD_EACH_PAGE === 0) {
      pageWiseData.push(tempArr);
      tempArr = [];
    }
    tempArr.push(obj);
  });

  // Push the last batch
  if (tempArr.length > 0) {
    pageWiseData.push(tempArr);
  }

  return pageWiseData;
};
const useFetchData = (): PaginatedData[] => {
    const [data, setData] = useState<PaginatedData[]>([]); // Update the type

  useEffect(() => {
    const fetchAndSetData = async () => {
      const resp = await fetchData();
      setData(modifyDataForPagination(resp));
    };
    fetchAndSetData();
  }, []);

  return data;
};
export default useFetchData;

