/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.6px;


  ${({ primary }) => primary ? css`
  color: #F1B080;
  ` : css`
  color: #FFFFFF;
  `};


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
  primary = true,
  ...props
}) => {
  return (
    <StyledText
                data-testid="Text"
                size={ size }
                style={{ backgroundColor }}
                primary={primary}
                error={error} {...props}>
      { children }
    </StyledText>
  )
};