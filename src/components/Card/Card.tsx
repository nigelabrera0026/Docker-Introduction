/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 280px; // Adjust width as per your design
  padding: 16px;
  background-color: #fff;
  margin: 8px;
`;

const StyledImageContainer = styled.div<CardProps>`
  width: 100%;
  height: 160px; // Adjust height as per your design
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 4px;
`;

const StyledImage = styled.img<CardProps>`
  width: 100%;
  height: auto;
`;

const StyledTextTitle = styled(Text)`
  font-size: 1.25rem; // Adjust font size as per your design
  font-weight: bold;
  margin-bottom: 8px;
  color: grey;
`;

const StyledTextBody = styled(Text)`
  font-size: 1rem; // Adjust font size as per your design
  margin-bottom: 16px;
  color: #666;
  text-align: center;
`;

const StyledButton = styled(Button)`
  font-size: 1rem; // Adjust font size as per your design
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  /* Disabled State */
  &:disabled {
        border: 0;
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

      };

      /* Pressed state */
      &:not(:disabled):active {
        box-shadow: none;
        transform: translateY(1px);
      };

      /* Hover state */
      &:not(:disabled):hover {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      };
`;

export const Card =({
  title="Card Component Title",
  size='normal',
  disabled=false,
  linker="Learn More",
  content="Lorem ipsum somthing, this needs to have a truncation at length x",

}: CardProps) => {
  return (
    <StyledCard size={size}>
      <StyledImageContainer>
        <StyledImage />
      </StyledImageContainer>
      <StyledTextTitle >{title}</StyledTextTitle>
      <StyledTextBody>{content}</StyledTextBody>
      <StyledButton primary={true} label={linker}></StyledButton>
    </StyledCard>
  );
};

