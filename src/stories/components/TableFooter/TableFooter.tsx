import {Text} from '../Text';
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTableFooter = styled.tfoot`
  background-color: blue;
  color: white;
`;

export const TableFooter = ({ children, backgroundColor }: TableFooterProps) => {
  return (
    <StyledTableFooter style={{backgroundColor}}>
      <Text primary={false}>{children}</Text>
    </StyledTableFooter>
  );
};