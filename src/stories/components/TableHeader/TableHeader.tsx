import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";
import { Text } from '../Text';


const StyledTableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: blue;
  color: white;
  border-bottom: 1px solid gray;
`;

export const TableHeader = ({ title, backgroundColor }: TableHeaderProps) => {
  return (
    <StyledTableHeader style={{ backgroundColor }}>
      <Text primary={true}>{title}</Text>
    </StyledTableHeader>
  )};