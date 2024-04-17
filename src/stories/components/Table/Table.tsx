import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableFooter } from '../TableFooter';

// Styled components for the table
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Table Component
export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeader key={column.key} title={column.title} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <TableRow key={rowIndex} data={rowData} />
        ))}
      </tbody>
      <TableFooter>Footer Content Here</TableFooter>
    </StyledTable>
  );
};