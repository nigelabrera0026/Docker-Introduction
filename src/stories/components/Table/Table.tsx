import { TableProps } from './Table.types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableFooter } from '../TableFooter/TableFooter';

export const Table = ({ header, rows, footer, size, backgroundColor, disabled=false }: TableProps) => {
  return (
    <table style={{backgroundColor}} data-testid="Table">
      <TableHeader headers={header} size={size} disabled={disabled} />
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} cells={row} size={size} disabled={disabled}/>
        ))}
      </tbody>
      {footer && <TableFooter footers={footer} size={size} disabled={disabled}/>}
    </table>
  );
};
