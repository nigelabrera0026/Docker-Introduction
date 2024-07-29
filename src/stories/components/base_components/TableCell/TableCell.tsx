
import styled, { css } from 'styled-components';
import { TableCellProps } from './TableCell.types';
import { Text } from '../Text';

const StyledTableCell = styled.td<{ size: 'mobile' | 'normal', disabled: boolean }>`

  text-align: left;
  border-bottom: 1px solid gray;
  ${({ size }) => size === 'mobile' ? css`
    padding: 2px;
  `: css`
    padding: 8px;
  `};

  ${({ disabled }) => disabled ? css`
    opacity: 50%;
  `:css`
    opacity: 100%;
  `};
`;

export const TableCell = ({ children, backgroundColor, size='normal', disabled=false }: TableCellProps) => {
  return (
    <StyledTableCell style={{ backgroundColor }} size={size} data-testid='TableCell' disabled={disabled}>
      <Text primary={true} size={size}>{children}</Text>
    </StyledTableCell>
  );
};