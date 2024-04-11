/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

const DropdownContainer = styled.div<DropdownProps>`
  position: relative;
  background: ${({ primary }) => (primary ? '#F1B080' : 'white')};
  width: max-content;
`;

const DropdownButton = styled(Button)<DropdownProps>`
  width: 200px;
  padding: 10px;
  border: none;
  background: ${({ primary }) => (primary ? 'transparent' : '#F1B080')};
  color: ${({ primary }) => (primary ? '#F1B080' : 'white')};
  text-align: left;
  &:after {
    content: ${({ open }) => (open ? "'▲'" : "'▼'")};
    float: right;
  }
`;

const DropdownContent = styled.ul<DropdownProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background: ${({ primary }) => (primary ? '#F1B080' : 'white')};
  margin-top: 5px;
  box-shadow: ${({ open }) => (open ? '0px 8px 16px 0px rgba(0,0,0,0.2)' : 'none')};
  z-index: 1;
  width: 200px;
  padding: 0;
`;

const DropdownItem = styled.li<DropdownProps>`
  list-style: none;
  padding: 10px;
  color: ${({ primary }) => (primary ? 'white' : '#F1B080')};
  background: ${({ primary }) => (primary ? '#F1B080' : 'white')};
  &:hover {
    background: ${({ primary }) => (primary ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)')};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  primary = true,
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => !disabled && setIsOpen(!isOpen);

  return (
    <DropdownContainer primary={primary} {...props}>
      <DropdownButton as="button" onClick={toggleDropdown} open={isOpen} primary={primary} disabled={disabled}>
        <Text disabled={disabled}>CONNECT</Text>
      </DropdownButton>
      <DropdownContent open={isOpen} primary={primary}>
        <DropdownItem primary={primary}><Text disabled={disabled}>ABOUT</Text></DropdownItem>
        <DropdownItem primary={primary}><Text>CONTACT</Text></DropdownItem>
        <DropdownItem primary={primary}><Text>CONTENTS</Text></DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;