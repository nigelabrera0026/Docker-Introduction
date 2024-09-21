/** 
 * Button component.
 * @author    Nigel Abrera
 * @date      March 02, 2024
 * @update    September 21, 2024
*/
import { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  min-width: 90px;
  letter-spacing: 0.6px;
  border-radius: 3px;
  display: inline-block;
  line-height: 1;
  border: 0;
  color: white;
  background-color: #6482AD;
  align-items: center;
  
  ${({ size }) => size === 'mobile'? css`
        font-size: 12px;
        padding: 10px 16px;
      `: css`
        font-size: 14px;
        padding: 11px 20px;
      `
    };

  /* Disabled State */
  &:disabled {
    border: 0;
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    cursor: not-allowed;
  };

  &:not(:disabled) {
    cursor: pointer;
  };

  /* Pressed state */
  &:not(:disabled):active {
    box-shadow: none;
    transform: translateY(1px);
  };

  /* Hover state */
  &:not(:disabled):hover {
    box-shadow: none;
    transform: translateY(1px);
  };

  /* Focus state {when clicked} */
  &:focus {
    outline: none; /* Removes focus outline */
    border: none;  /* Ensures no border is added */
  }
`;

export const Button = ({
  size = 'normal',
  backgroundColor,
  label,
  ...props

}: ButtonProps) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {

    setIsClicked(true);

    if (props.onClick) {
      props.onClick();
    };
    
  }, [props]);

  return (
    <StyledButton
      size={size}
      style={{ backgroundColor }}
      {...props}
      data-testid={"Button"}
      onClick={handleClick}>
      {label}
    </StyledButton>
  );
};
