import { TableCellProps } from '../TableCell/TableCell.types';

export interface TableRowProps {
  cells: React.ReactNode[];
  size: TableCellProps['size'];
  disabled: TableCellProps['disabled'];
  backgroundColor?: string;
}
