import { TableHeaderProps } from './TableHeader.types';
import { TableRow } from '../TableRow/TableRow';
export const TableHeader= ({ headers, size, disabled=false, backgroundColor }: TableHeaderProps) => {
  return (
    <thead style={{backgroundColor}} data-testid="TableHeader">
      <TableRow cells={headers} size={size} disabled={disabled}/>
    </thead>
  );
};