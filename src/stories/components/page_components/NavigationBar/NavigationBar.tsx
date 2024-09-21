/**
 * Navigation bar component.
 * @author    Nigel Abrera
 * @date      April 30, 2024
 */
import styled, { css } from 'styled-components';
import { Text } from '../../base_components/Text';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationBarProps } from './NavigationBar.types';

/*
TODO: Configure alignments of components and its children.
TODO: Make navbar stick when scrolling down.
TODO: Recreate hero image and learn how to make a slideshow.
TODO: Implement styling and confirm in GPT.
FIXME Remove padding or the size of the button in the dropdown component.
*/

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