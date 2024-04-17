
import styled, { css } from 'styled-components';
import { TableCellProps } from './TableCell.types';
import { Text } from '../Text';

const StyledTableCell = styled.td<{ size: 'mobile' | 'normal'}>`

  text-align: left;
  border-bottom: 1px solid gray;
  ${({ size }) => size === 'mobile' ? css`
    padding: 2px;
  `: css`
    padding: 8px;
  `};
`;

export const TableCell = ({ children, backgroundColor, size='normal' }: TableCellProps) => {
  return (
    <StyledTableCell style={{ backgroundColor }} size={size} data-testid='TableCell'>
      <Text primary={true} size={size}>{children}</Text>
    </StyledTableCell>
  );
};