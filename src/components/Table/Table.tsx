/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/


import styled, { css } from 'styled-components';
import { Text } from '../Text/Text';
import { TableProps } from './Table.types';


const TableStyled = styled.table<{ disabled?: boolean, size: string }>`
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : size === 'large' ? '1.2rem' : '1rem')};
  border-collapse: collapse;
`;

const ThStyled = styled.th`
  padding: 10px;
  background-color: #eee;
  border-bottom: 1px solid #ddd;
`;

const TheadStyled = styled.thead`
  padding: 10px;
  background-color: #eee;
  border-bottom: 1px solid #ddd;
`;

const TrStyled = styled.tr<{ variant?: 'normal' | 'striped', index: number }>`
  ${({ variant, index }) => variant === 'striped' && index % 2 && css`
    background-color: #f2f2f2;
  `}
`;

const TdStyled = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TfootStyled = styled.tfoot`
  background-color: #000000;
  border-top: 2px solid #ddd;
`;

const TbodyStyled = styled.tbody`
  padding: 10px;
  background-color: #eee;
  border-bottom: 1px solid #ddd;
`;



export const Table: React.FC<TableProps> = ({ columns, data, footer }) => {
  return (
    <div>
      <TableStyled size="1.2rem">
        <thead>
          <tr>
            {columns.map((column, index) => index < 2 && <ThStyled key={column.key} colSpan={2}><Text primary={true}>{column.title}</Text></ThStyled>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TrStyled key={rowIndex} variant="normal" index={rowIndex}>
              {row.slice(0, 2).map((cell, cellIndex) => (
                <TdStyled key={cellIndex}><Text primary={true}>{cell}</Text></TdStyled>
              ))}
            </TrStyled>
          ))}
        </tbody>
        {footer && (
          <TfootStyled>
            <tr>
              <td colSpan={2}>{footer}</td>
            </tr>
          </TfootStyled>
        )}
      </TableStyled>
    </div>
  );
};

export default Table; // Exporting the Table component


{/* <div>
<TableStyled>
  <thead>
    <tr>
      {columns.map((column, index) => index < 2 && <ThStyled key={column.key}><Text primary={true}>{column.title}</Text></ThStyled>)}
    </tr>
  </thead>
  <tbody>
    {data.map((row, rowIndex) => (
      <TrStyled key={rowIndex} variant="normal" index={rowIndex}>
        {row.slice(0, 2).map((cell, cellIndex) => (
          <TdStyled key={cellIndex}><Text primary={true}>{cell}</Text></TdStyled>
        ))}
      </TrStyled>
    ))}
  </tbody>
  {footer && (
    <TfootStyled>
      <tr>
        <td colSpan={2}>{footer}</td>
      </tr>
    </TfootStyled>
  )}
</TableStyled>
</div> */}