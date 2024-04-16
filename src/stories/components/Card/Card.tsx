/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { ImageProps } from  '../Image/Image.types';

const StyledCard = styled.div<{ size?: 'mobile' | 'normal' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 8px;

  ${({ size }) => size === 'mobile' ? css`
    width: 150px;
    padding: 12px;
  ` : css`
    width: 280px;
    padding: 16px;
  `};
`;

const StyledImageContainer = styled.div<{ size?: 'mobile' | 'normal' }>`
  width: 100%;
  ${({ size }) => size === 'mobile' ? css`
    height: 80px;
  ` : css`
    height: 160px;
  `};
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 4px;
`;

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: auto;
`;

const StyledTextTitle = styled(Text)<{ size?: 'mobile' | 'normal'}>`
  font-weight: bold;
  margin-bottom: 8px;
  color: grey;
  ${({ size }) => size === 'mobile' ? css`
     font-size: 10px;
   ` : css`
     font-size: 1.25rem;
   `};
`;


const StyledTextBody = styled(Text)`
   margin-bottom: 16px;
   color: #666;
   text-align: center;
   ${({ size }) => size === 'mobile' ? css`
     font-size: 10px;
   ` : css`
     font-size: 1.25rem;
   `};
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Card = ({
  image,
  title = "Card Component Title",
  content = "Lorem ipsum somthing, this needs to have a truncation at length x",
  linker = "Learn More",
  size = 'normal',
  disabled = false,
  backgroundColor,
}: CardProps) => {
  return (
    <StyledCard size={size} style={{backgroundColor}}>
      <StyledImageContainer size={size}>
        <StyledImage src={image.src} alt={image.alt} size={size} disabled={image.disabled} />
      </StyledImageContainer>
      <StyledTextTitle size={size}>{title}</StyledTextTitle>
      <StyledTextBody size={size}>{content}</StyledTextBody>
      <StyledButton size={size} label={linker} disabled={disabled} data-testid={"Button"}/>
    </StyledCard>
  );
};

