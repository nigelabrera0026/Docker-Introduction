/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';


// Dropdown Container
const DropdownContainer = styled.div<DropdownProps>`
  position: relative;
  ${({primary}) => primary ? css`background: #F1B080` : `background: #FFFFFF`};
`;

// The Connect button
const DropdownButton = styled(Button)<DropdownProps>`

  ${({primary}) => primary ? css`
  background: transparent;
  color: #F1B080
  ` : css`
  background: #F1B080;
  color: #FFFFFF

  `};
  border: none;
  cursor: pointer;
  width: 200px;
  text-align: center;
  padding: 10px;
  &:after {
    content: '▼';
    float: right;
  }
`;

// Dropdown Content
const DropdownContent = styled.ul<DropdownProps>`
/* Implemented logic of open is clicked */
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  ${({primary}) => primary ? css`background: #F1B080` : css`background: #FFFFFF`};
  text-align: centered;

  z-index: 0;
`;

// Dropdown Items
const DropdownItem = styled(Text)<DropdownProps>`
  text-decoration: none;
  display: absolute;
  width: 100px;

  /* The code belows is saying that this applies to the children of DropdownItem */
  & > * {
    color: #F1B080;
    // Fixme: The code below doesn't apply because the props are not implemented to this.
    ${({primary}) => primary ? css`color: #F1B080` : css`color: #FFFFFF`};

  }

  &:hover {
    background: #f2f2f2;
  }
`;


const Dropdown: React.FC<DropdownProps> = ({
  backgroundColor,
  error=false,
  primary=true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownContainer backgroundColor={backgroundColor}>
      <DropdownButton as={Button} onClick={toggleDropdown} label='CONNECT'/>
      <DropdownContent open={isOpen} primary={primary}>
        <DropdownItem><Text>ABOUT</Text></DropdownItem>
        <DropdownItem><Text>CONTACT</Text></DropdownItem>
        <DropdownItem><Text>CONTENTS</Text></DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
