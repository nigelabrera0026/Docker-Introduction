import React from 'react';
import styled, { css } from "styled-components";
import { RadioButtonProps, RadioButtonOption } from "./Radio.types";
import { Text } from '../Text/Text'; // Ensure this path is correct for your project

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel = styled.label<{ isDisabled: boolean }>`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  ${({ isDisabled }) => isDisabled && css`
    opacity: 0.5;
  `};
`;

const RadioInput = styled.input.attrs({ type: 'radio' })<{ isDisabled: boolean }>`
  margin-right: 10px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;

const Radio: React.FC<RadioButtonProps> = ({
  name,
  options,
  onChange,
  disabled = false, // Providing a default value here for safety
}) => {
  return (
    <RadioWrapper>
      {options.map((option: RadioButtonOption) => {
        const isOptionDisabled = option.disabled !== undefined ? option.disabled : disabled; // Explicitly handling undefined
        return (
          <RadioLabel key={option.value} isDisabled={isOptionDisabled}>
            <RadioInput
              name={name}
              value={option.value}
              disabled={isOptionDisabled} // Applying the disabled status to each input
              isDisabled={isOptionDisabled} // This is for styled-component specific styling
              onChange={() => onChange(option.value)}
            />
            <Text size="normal" disabled={isOptionDisabled}>
              {option.label}
            </Text>
          </RadioLabel>
        );
      })}
    </RadioWrapper>
  );
};

export default Radio;