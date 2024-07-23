/*
@author:    Nigel Abrera
@date:      April 30, 2024
*/

import styled, { css } from 'styled-components';
import { Text } from '../Text/Text';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationBarProps } from './NavigationBar.types';

const StyleContainer = styled.div<NavigationBarProps>`
  display: inline;
  height: 20px;
  ${({ size }) => size === 'mobile' ? css`
    width: 60px;
  ` : css`
    width: 100%;
  `};
`;

export const NavigationBar = ({
  size = 'normal',
  
}: NavigationBar) => {
  return(
    <StyleContainer>
      <Text>Nigel</Text>
      <Dropdown></Dropdown>
    </StyleContainer>

  );
};