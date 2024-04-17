
import { TableFooterProps } from './TableFooter.types';
import { TableRow } from '../TableRow/TableRow';

export const TableFooter = ({ footers, size, disabled=false, backgroundColor }: TableFooterProps) => {
  return (
    <tfoot style={{backgroundColor}} data-testid="TableFooter">
      <TableRow cells={footers} size={size} disabled={disabled} />
    </tfoot>
  );
};