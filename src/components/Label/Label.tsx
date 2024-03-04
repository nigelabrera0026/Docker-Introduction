/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { LabelProps } from './Label.types';
import { Text } from '../Text/Text';

// Todo: Implement Error state and disabled state,
//       Modify Styling for the wrapper and stuff

const LabelWrapper = styled.label<LabelProps>`
  display: inline-block;
  ${({ variant }) => variant === 'mobile' ?
    css`
      font-size: 10px;
    ` : css`
      font-size: 25px;
    ` };
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label: React.FC<LabelProps> = ({
  label="Email Address",
  variant='normal',
  error=false,
  ...props
}) => {
  return(
    <LabelWrapper error={error} variant={variant}>
      <Text>{label}</Text>
      <Input {...props} />
    </LabelWrapper>
  );
};


