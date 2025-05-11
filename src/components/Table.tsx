import React, { useMemo, useState } from "react";
import { COLUMN_NAME, KEY_NAME, BUTTON_TYPE } from "../constant";
import Pagination from "./Pagination";

const Column = () => {
  return (
    <tr>
      {Object.values(COLUMN_NAME).map((colName) => {
        return <th>{colName}</th>;
      })}
    </tr>
  );
};
const Row = ({ data }) => {
  return data.map((rowData) => {
    return (
      <tr>
        {Object.values(KEY_NAME).map((eachKeyName) => {
          return <td>{rowData[eachKeyName]}</td>;
        })}
      </tr>
    );
  });
};
function Table({ data }) {
  const [activePage, setActivePage] = useState(0);
  const totalPage = useMemo(() => data.length, [data.length]);
  const handleButtonClick = (e) => {
    const btnId = e?.target?.dataset?.buttonid;
    if(btnId){
        setActivePage(parseInt(btnId));
    }
  }
  const  handlePrevNext = (buttonType) => {
    if(buttonType === BUTTON_TYPE.PREV){
        setActivePage((prev) => prev - 1);
    }else {
        setActivePage((prev) => prev + 1);
    }
  }
  return (
    <>
      <table id="table-data">
        <Column />
        <Row data={data[activePage]} />
      </table>
      {totalPage > 1 ? (
        <Pagination
          totalPage={totalPage}
          activePage={activePage}
          isStart={activePage === 0}
          isLast={activePage === data.length - 1}
          handleButtonClick={handleButtonClick}
          handlePrevNext={handlePrevNext}
        />
      ) : null}
    </>
  );
}

export default Table;

