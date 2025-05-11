import { BUTTON_TYPE, KEY_NAME } from "./constant";
export type DataT = {
  's.no': number;
  'amt.pledged': number;
  'percentage.funded': number;
};

export type PaginatedData = DataT[];

export type TableProps = {
  data: PaginatedData[];
};

export type RowProps = {
  data: PaginatedData;
};
export type ButtonTypeT = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
export type KeyNameValuesT = (typeof KEY_NAME)[keyof typeof KEY_NAME];

