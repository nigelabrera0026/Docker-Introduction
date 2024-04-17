import { TableRowProps } from './TableRow.types';
import { TableCell } from '../TableCell/TableCell';

export const TableRow = ({ cells, size, disabled, backgroundColor }: TableRowProps) => {
  return (
    <tr style={{backgroundColor}} data-testid='TableRow'>
      {cells.map((cellContent, index) => (
        <TableCell key={index} size={size} disabled={disabled}>
          {cellContent}
        </TableCell>
      ))}
    </tr>
  );
};
