/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
export interface Column {
  key: string;
  title: string;
}

export interface TableProps {
  columns: Column[];
  data: string[][];
  backgroundColor?: string;
  disabled: boolean;
}
