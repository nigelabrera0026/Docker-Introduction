import { TableHeaderProps } from './TableHeader.types';
import { TableRow } from '../TableRow/TableRow';

export const TableHeader= ({ headers, size, disabled=false, backgroundColor }: TableHeaderProps) => {
  return (
    <thead style={{backgroundColor}}>
      <TableRow cells={headers} size={size} disabled={disabled}/>
    </thead>
  );
};