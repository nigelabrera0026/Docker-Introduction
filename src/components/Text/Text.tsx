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
  ${({ primary })}
`;

export const Text: React.FC<TextProps> = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  words,
  ...props
}) => {
  return (
    <StyledText primary={ primary } size={ size } style={{ backgroundColor }} {...props}>
      { words }
    </StyledText>
  )
};