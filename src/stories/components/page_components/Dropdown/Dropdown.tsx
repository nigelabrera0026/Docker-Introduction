/** 
 * Dropdown component.
 * @author    Nigel Abrera
 * @date      March 03, 2024
*/
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { Text } from '../../base_components/Text';

const DropdownContainer = styled.div<{ size: 'mobile' | 'normal'}>`
  position: relative;
  align-items: center;
  width: ${({ size }) => (size === 'mobile' ? '100%' : '150px')};
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const DropdownButton = styled.button<DropdownProps>`
  width: 100%;
  padding: 0;

  ${({ primary }) => primary === true ? css`
    // Primary Color
    background: #F1B080;
    border: 1px solid #F1B080;
  ` : css`
    // White Color
    background: #ffffff;
    border: 1px solid #ffffff;
  
  `};

  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  position: relative;
  justify-content: center;
  border-color: none;

  /* Focus state {when clicked or tabbed} */
  &:focus {
    outline: none; /* Removes focus outline */
    border: none;  /* Ensures no border is added */
  };

  &:hover {
    background-color: #f8f8f8; 
    border: none;
  };

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const DropdownContent = styled.ul<DropdownProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  border-radius: 4px;
  padding: 0;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
  list-style-type: none;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8; 
  };
`;

const TextStyling = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  ${({size}) => size === 'mobile' ? css`
    font-size: 10px;
  ` : css`
    font-size: 18px; 
  `};
  letter-spacing: 4px;
`;

const Dropdown = ({
  disabled = false,
  open,
  backgroundColor,
  size = 'normal',
  primary,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    };
  };

  return (
    <DropdownContainer size={size} >
      <DropdownButton primary={primary} style={{ backgroundColor }} disabled={disabled} onClick={toggleDropdown} size={size} data-testid="dropdown">
        <TextStyling size={size} primary={true} children="MENU"/>
      </DropdownButton>
      <DropdownContent open={isOpen} size={size}>
        <DropdownItem style={{ backgroundColor }}><TextStyling size={size} children="ABOUT" /></DropdownItem>
        <DropdownItem style={{ backgroundColor }}><TextStyling size={size} children="CONNECT" /></DropdownItem>
        <DropdownItem style={{ backgroundColor }}><TextStyling size={size} children="RESUME" /></DropdownItem>
        <DropdownItem style={{ backgroundColor }}><TextStyling size={size} children="PROJECTS" /></DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export { Dropdown };