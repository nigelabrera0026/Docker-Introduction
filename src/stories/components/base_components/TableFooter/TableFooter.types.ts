import { TableRowProps } from '../TableRow/TableRow.types';

export interface TableFooterProps {
  footers: React.ReactNode[];
  size: TableRowProps['size'];
  disabled: TableRowProps['disabled'];
  backgroundColor?: string;
}
