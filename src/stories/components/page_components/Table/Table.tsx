/** 
 * Table Component
 * @author Nigel Abrera
 * @date   July 29, 2024
*/

import { TableProps } from './Table.types';
import { TableHeader } from '../../base_components/TableHeader';
import { TableRow } from '../../base_components/TableRow';
import { TableFooter } from '../../base_components/TableFooter';

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
