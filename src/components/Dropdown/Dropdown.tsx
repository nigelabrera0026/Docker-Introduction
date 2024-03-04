/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';


// Dropdown Container
const DropdownContainer = styled.div`
  position: relative;
  background: #FFFFFF; // replace with the exact color from your design
  width: 200px; // adjust as needed
`;

// Dropdown Button
const DropdownButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 10px; // adjust as needed
  &:after {
    content: '▼';
    float: right;
  }
`;

// Dropdown Content (hidden by default)
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: #E0C3A6; // replace with the exact color from your design
  width: 100%;
  z-index: 1;
`;

// Show the dropdown content on hover
const DropdownHover = styled.div`
  &:hover ${DropdownContent} {
    display: block;
  }
`;

// Dropdown Items
const DropdownItem = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #000; // replace with the exact color from your design
  &:hover {
    background: #f2f2f2; // replace with a lighter shade of the dropdown background or another color
  }
`;

// Usage inside a component
const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownHover>
        <DropdownButton>CONNECT</DropdownButton>
        <DropdownContent>
          <DropdownItem href="#"><Text>ABOUT</Text></DropdownItem>
          <DropdownItem href="#"><Text>CONTACT</Text></DropdownItem>
          <DropdownItem href="#"><Text>CONTENTS</Text></DropdownItem>
        </DropdownContent>
      </DropdownHover>
    </DropdownContainer>
  );
};

export default Dropdown;
