/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/
import styled, { css } from 'styled-components';
import { LabelProps } from './Label.types';
import { Text } from '../Text/Text';

const LabelContainer = styled.div<LabelProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `};
`;

const Input = styled.input<LabelProps>`
  width: 100%;
  margin-top: 4px;
  padding: ${({ variant }) => variant === 'mobile' ? '9px' : '14px'};
  border: 1px solid #F1B080;
  border-radius: 4px;

  ${({ variant }) => variant === 'mobile' ? css`
    font-size: 10px;
  ` : css`
    font-size: 15px;
  `}

  &:disabled {
    border-color: #333;
    background-color: #ccc;
    color: #333;
    pointer-events: none;
    opacity: 0.5;
  }

  ${({ error }) => error && css`
    border-color: red;
  `}
`;

export const Label = ({
  label = "Email Address",
  variant = 'normal',
  disabled = false, // Add default value for disabled
  error = false,
  ...props
}: LabelProps) => {
  return (
    <LabelContainer disabled={disabled} variant={variant}>
      <Text size={variant} error={error} disabled={disabled}>{label}</Text>
      <Input disabled={disabled} variant={variant} error={error} {...props} data-testid="Label"/>
    </LabelContainer>
  );
};
