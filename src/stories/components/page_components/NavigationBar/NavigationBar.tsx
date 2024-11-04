import styled, { css } from 'styled-components';
import { Text } from '../../base_components/Text';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationBarProps } from './NavigationBar.types';
import { Image } from '../../base_components/Image';

/*
TODO: Input the theme toggler beside the dropdown.
TODO: Make navbar stick when scrolling down.
TODO: Change Logo.
*/
//! Name holder has been used as a container probably try that first.
// const LogoContainer = styled.div<NavigationBarProps>`
//   ${({ size }) => size === 'mobile' ? css`
  
//   `:css`
  
//   `}
// `;
//! Check the types to implement src of image. I'm tired for now.
const Logo = styled(Image)<NavigationBarProps>`
  ${({size}) => size === 'mobile' ? css`
    // TODO: Change this when editing the mobile version
    height: 20px;
    width: 30px;
  ` : css`
    height: 20px;
    width: 30px;
  `}
  
`;


const ListContainer = styled.ul<NavigationBarProps>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `};
`;

const NameHolder = styled.li<NavigationBarProps>`
  flex-grow: 1;
  padding-left: 20px;
`;

const DropHolder = styled.li<NavigationBarProps>`
  padding: 0;
`;

const TextStyling = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  float:  left;
  ${({size}) => size === 'mobile' ? css`
    font-size: 10px;
  ` : css`
    font-size: 20px; 
  `};
  
  letter-spacing: 5px;
`;

const NavigationBar = ({
  size = 'normal',
  backgroundColor,
  disabled = false,
}: NavigationBarProps) => {
  return (
    <ListContainer
      data-testid={"NavBar"}
      size={size}
      backgroundColor={backgroundColor}
      disabled={disabled}>
      <NameHolder>
        <TextStyling size={size} children="NIGEL"/>
      </NameHolder>
      <DropHolder>
        <Dropdown size={size} />
      </DropHolder>
    </ListContainer>
  );
};

export { NavigationBar };