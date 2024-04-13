/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../Text/Text';
import { TableProps } from './Table.types';

const TableStyled = styled.table<{ isDisabled?: boolean, size: 'mobile' | 'normal' }>`
  width: 100%;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  border-collapse: collapse;

  ${({ size }) => size === 'mobile' && css`
    width: auto; // Adjust the width or max-width as needed for mobile
  `};
`;

const ThStyled = styled.th<{ size: 'mobile' | 'normal' }>`
  background-color: #eee;
  border-bottom: 1px solid #ddd;

  ${({ size }) => size === 'mobile' ? css`
    padding: 6px; // Smaller padding on mobile
  ` : css`
    padding: 10px; // Larger padding on normal
  `};
`;

const TdStyled = styled.td<{ size: 'mobile' | 'normal' }>`
  border-bottom: 1px solid #ddd;

  ${({ size }) => size === 'mobile' ? css`
    padding: 4px; // Smaller padding on mobile
  ` : css`
    padding: 8px; // Larger padding on normal
  `};
`;

const TfootStyled = styled.tfoot<{ size: 'mobile' | 'normal' }>`
  background-color: #f2f2f2;
  border-top: 2px solid #ddd;

  td {
    ${({ size }) => size === 'mobile' ? css`
      padding: 6px; // Smaller padding on mobile
    ` : css`
      padding: 10px; // Larger padding on normal
    `};
  }
`;

export const Table: React.FC<TableProps> = ({ columns, data, footer, size = 'normal', disabled }) => {
  return (
    <TableStyled isDisabled={disabled} size={size}>
      <thead>
        <tr>
          {columns.map((column) => (
            <ThStyled key={column.key} size={size}>
              <Text size={size} disabled={disabled}>{column.title}</Text>
            </ThStyled>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TdStyled key={cellIndex} size={size}>
                <Text size={size} disabled={disabled}>{cell}</Text>
              </TdStyled>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <TfootStyled size={size}>
          <tr>
            <td colSpan={columns.length}>
              <Text size={size} disabled={disabled}>{footer}</Text>
            </td>
          </tr>
        </TfootStyled>
      )}
    </TableStyled>
  );
};

export default Table;