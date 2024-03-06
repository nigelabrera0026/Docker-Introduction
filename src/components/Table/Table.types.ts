/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
export interface TableProps {
  children: React.ReactNode;
}

export interface TableRowProps {
  children: React.ReactNode;
}

export interface TableCellProps {
  primary?: boolean;
  children: React.ReactNode;
}

export interface TableHeaderProps {
  children: React.ReactNode;
}

export interface TableFooterProps {
  children: React.ReactNode;
}