/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

/*
Disabled css attr.
color: #333;
background-color: transparent;
box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
*/
const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  border: 0;
  min-width: 90px;
  letter-spacing: 0.6px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ primary }) =>
    primary
      ? css`
          color: white;
          background-color: #F1B080;
        `
      : css`
          color: #F1B080;
          background-color: transparent;
          box-shadow: #F1B080 0px 0px 0px 1px inset;
        `};

  ${({ size }) =>
    size === 'small'
      ? css`
          font-size: 12px;
          padding: 10px 16px;
        `
      : size === 'medium'
      ? css`
          font-size: 14px;
          padding: 11px 20px;
        `
      : css`
          font-size: 16px;
          padding: 12px 24px;
        `};

        &:disabled {
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          cursor: not-allowed;
        }

        /* Hover state */
        &:not(:disabled):hover {
          box-shadow: 0px 2px 0px 4px rgba(0,0,0,0.1);
        }
`;

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton primary={primary} size={size} style={{ backgroundColor }} {...props}>
      {label}
    </StyledButton>
  );
};
