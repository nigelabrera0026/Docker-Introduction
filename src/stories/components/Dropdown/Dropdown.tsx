/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { Text } from '../Text/Text';

const DropdownContainer = styled.div<{ size: 'mobile' | 'normal' }>`
  position: relative;
  width: ${({ size }) => (size === 'mobile' ? '100%' : '200px')}; // Full width for mobile
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;


const DropdownButton = styled.button<DropdownProps>`
  width: 100%;
  padding: ${({ size }) => (size === 'mobile' ? '8px' : '10px 16px')};
  background: #F1B080;
  border: 1px solid #F1B080;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  position: relative;


  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const DropdownContent = styled.ul<DropdownProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
  list-style-type: none;
`;

const DropdownItem = styled.li`
  display: flex; // Ensures children can be centered
  justify-content: center; // Center horizontally in the flex container
  align-items: center; // Center vertically in the flex container
  padding: 8px 16px; // Adjust padding as needed
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8; // Add a hover effect
  }
`;


const Dropdown: React.FC<DropdownProps> = ({
  disabled = false,
  open,
  size = 'normal',
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownContainer size={size}>
      <DropdownButton disabled={disabled} onClick={toggleDropdown} size={size} data-testid="dropdown">
        <Text size={size} primary={false}>Options</Text>
      </DropdownButton>
      <DropdownContent open={isOpen} size={size}>
        <DropdownItem><Text size={size}>Profile</Text></DropdownItem>
        <DropdownItem><Text size={size}>Settings</Text></DropdownItem>
        <DropdownItem><Text size={size}>Logout</Text></DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;