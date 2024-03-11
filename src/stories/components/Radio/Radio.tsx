/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import React from 'react';
import styled, { css } from "styled-components";
import { RadioButtonProps } from "./Radio.types";

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel = styled.label<{ disabled?: boolean }>`
  margin-bottom: 5px;
  color: ${(props) => (props.disabled ? '#999' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;
 const Radio: React.FC<RadioButtonProps> = ({
  name,
  options,
  onChange,
  disabled,
}) => {
  return (
    <RadioWrapper>
      {options.map((option) => (
        <RadioLabel key={option.value} disabled={disabled || option.disabled}>
          <RadioInput
            type="radio"
            name={name}
            value={option.value}
            disabled={disabled || option.disabled}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </RadioLabel>
      ))}
    </RadioWrapper>
  );
};

export default Radio;
