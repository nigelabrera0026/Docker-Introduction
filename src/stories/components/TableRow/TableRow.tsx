
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';
import { TableCell } from '../TableCell';

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <StyledTableRow>
      {data.map((cellContent, index) => (
        <TableCell key={index} content={cellContent} />
      ))}
    </StyledTableRow>
  );
};