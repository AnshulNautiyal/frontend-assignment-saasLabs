import { useMemo, useState } from "react";
import { COLUMN_NAME, KEY_NAME, BUTTON_TYPE } from "../constant";
import Pagination from "./Pagination";
import type {
  RowProps,
  ButtonTypeT,
  TableProps,
  KeyNameValuesT,
} from "../types";

const Column = () => {
  return (
    <tr>
      {Object.values(COLUMN_NAME).map((colName) => {
        return (
          <th scope="col" key={colName}>
            {colName}
          </th>
        );
      })}
    </tr>
  );
};
const Row = ({ data }: RowProps) => {
  return data.map((rowData, index) => {
    console.log(Object.values(KEY_NAME),rowData)
    return (
      <tr key={index}>
        {(Object.values(KEY_NAME) as KeyNameValuesT[]).map((eachKeyName) => {
          return <td key={`index`}>{rowData[eachKeyName]}</td>;
        })}
      </tr>
    );
  });
};
function Table({ data }: TableProps) {
  const [activePage, setActivePage] = useState(0);
  const totalPage = useMemo(() => data.length, [data.length]);
  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const btnId = target.dataset.buttonid;
    if (btnId) {
      setActivePage(parseInt(btnId));
    }
  };
  const handlePrevNext = (buttonType: ButtonTypeT) => {
    if (buttonType === BUTTON_TYPE.PREV) {
      setActivePage((prev) => prev - 1);
    } else {
      setActivePage((prev) => prev + 1);
    }
  };
  return (
    <>
      <table id="table-data" role="table" aria-labelledby="table-data-title">
        <caption id="table-data-title">User Data</caption>
        <thead>
          <Column />
        </thead>
        <tbody>
          <Row data={data[activePage]} />
        </tbody>
      </table>
      <Pagination
        totalPage={totalPage}
        activePage={activePage}
        isStart={activePage === 0}
        isLast={activePage === data.length - 1}
        handleButtonClick={handleButtonClick}
        handlePrevNext={handlePrevNext}
      />
    </>
  );
}

export default Table;

