/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

// styled.p for paragraph
const StyledText = styled.p<TextProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.6px;

  ${({ primary }) =>
    primary ? css`
      color: #F1B080;
    ` : css`
      color: #FFFFFF;
    `
    };

  ${({ size }) => size === 'small'? css`
      font-size: 10px;
  ` : size === 'large' ? css`
      font-size: 45px;
  ` : css`
      font-size: 20px;
  `};

  ${({ variant }) => variant === 'lighter'? css`
      font-weight: lighter;
    `: variant ==='bold'? css`
      font-weight: bold;
    ` : css`
      font-weight: normal;
    `};

    &:disabled {
      color: #333;
    };

  ${({ disabled }) => disabled && css`color: #333;`};
`;

export const Text: React.FC<TextProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  variant = 'normal',
  children,
  ...props
}) => {
  return (
    <StyledText primary={ primary }
                size={ size }
                style={{ backgroundColor }}
                variant={variant} {...props}>
      { children }
    </StyledText>
  )
};