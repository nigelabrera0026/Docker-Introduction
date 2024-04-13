import React from "react";

/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[][];
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'mobile' | 'normal';
  disabled?: boolean;         
}