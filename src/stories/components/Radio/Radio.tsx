import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { RadioButtonProps, RadioButtonOption } from "./Radio.types";
import { Text } from '../Text/Text';

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
`;

const Radio = ({
  name,
  options,
  onChange,
  disabled = false,
  size = 'normal',
}: RadioButtonProps) => {
  // State to track the selected option
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (options: RadioButtonOption, event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <RadioWrapper>
      {options.map((option: RadioButtonOption) => {
        const isOptionDisabled = option.disabled !== undefined ? option.disabled : disabled;
        return (
          <RadioLabel key={option.value} isDisabled={isOptionDisabled}>
            <RadioInput

              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={isOptionDisabled}
              onChange={(event) => handleRadioChange(option, event)}
              isDisabled={isOptionDisabled}
              data-testid={option.value}
            />
            <Text size={size} disabled={isOptionDisabled}>
              {option.label}
            </Text>
          </RadioLabel>
        );
      })}
    </RadioWrapper>
  );
};

export { Radio };