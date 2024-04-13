/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

// const StyledTextTitle = styled(Text)<{ size?: 'mobile' | 'normal' }>`
//   font-weight: bold;
//   margin-bottom: 8px;
//   color: grey;
//   // Conditional CSS based on the size prop
//   ${({ size }) => size === 'mobile' ? css`
//     font-size: 10px; // Smaller size for mobile
//   ` : css`
//     font-size: 1.25rem; // Default size
//   `};
// `;

// const StyledTextBody = styled(Text)<{ size?: 'mobile' | 'normal' }>`
//   margin-bottom: 16px;
//   color: #666;
//   text-align: center;
//   // Conditional CSS based on the size prop
//   ${({ size }) => size === 'mobile' ? css`
//     font-size: 0.875rem; // Smaller size for mobile
//   ` : css`
//     font-size: 1rem; // Default size
//   `};
// `;
const StyledText = styled.p<TextProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.6px;
  color: #F1B080;


  ${({ size }) => size === 'mobile'? css`
      font-size: 10px;
  ` : css`
      font-size: 20px;
  `};

  ${({ disabled }) => disabled && css`color: #333;`};
  ${({ error }) => error && css`color:  red;`}

`;

export const Text: React.FC<TextProps> = ({
  size = 'normal',
  backgroundColor,
  error = false,
  children,
  ...props
}) => {
  return (
    <StyledText
                size={ size }
                style={{ backgroundColor }}

                error={error} {...props}>
      { children }
    </StyledText>
  )
};