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

const LabelContainer = styled.div<LabelProps>`
  display: inline-block;

  ${({disabled}) => disabled && css`
    border-color: #333;
  `};


  ${({ error }) => error && css`
    border-color: red;
  `}
`;

const LabelWrapper = styled.label<LabelProps>`
  display: inline-block;

  ${({ variant }) => variant === 'mobile' ?
    css`
      font-size: 10px;
    ` : css`
      font-size: 25px;
    `};

  ${({disabled}) => disabled && css`
    color: #333;
  `};

  ${({ error }) => error && css`
    color: red;
  `}
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid #F1B080;
  border-radius: 4px;

  &:disabled {
    border: 1px solid #333;
  }


  // fixme NOT WORKING
  ${({ error }) => error && css`border-color:  red;`}
`;

/*


*/

export const Label = ({
  label="Email Address",
  variant='normal',
  error=false,
  ...props
}:LabelProps) => {
  return(
    <LabelContainer error={error} variant={variant} >
      <LabelWrapper error={error} variant={variant}>
        <Text primary={true} >{label}</Text>
      </LabelWrapper>
      <Input {...props} variant={variant}/>
    </LabelContainer>
  );
};
