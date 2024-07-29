/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import { TableCellProps } from '../../TableCell/TableCell.types';

export interface TableProps {
  header: React.ReactNode[];
  rows: React.ReactNode[][];
  footer?: React.ReactNode[];
  size: TableCellProps['size'];
  disabled: TableCellProps['disabled'];
  backgroundColor?: string;
}
