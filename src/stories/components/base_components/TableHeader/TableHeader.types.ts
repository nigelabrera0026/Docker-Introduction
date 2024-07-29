import { TableRowProps } from '../TableRow/TableRow.types';

export interface TableHeaderProps{
  headers: React.ReactNode[];
  size: TableRowProps['size'];
  disabled: TableRowProps['disabled'];
  backgroundColor?: string;
}