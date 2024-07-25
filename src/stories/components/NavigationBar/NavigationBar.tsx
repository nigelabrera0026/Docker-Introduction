/**
 * @author:    Nigel Abrera
 * @date:      April 30, 2024
 */
import styled, { css } from 'styled-components';
import { Text } from '../Text';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationBarProps } from './NavigationBar.types';


const StyledContainer = styled.div<NavigationBarProps>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white' };

  ${({ size }) => size === 'mobile' ? css`
    // if it is mobile
    width: 100%
    height: 100%
  ` : css`
    height: 1080px
    width: 1920px;
  `};

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `} 
`;

const TextStyling = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  ${({size}) => size === 'mobile' ? css`
    // if it is mobile
    font-size: 20px;
  ` : css`
    font-size: 40px; 
  `}

`;

//TODO: Edit styling for the container

const NavigationBar = ({
  size = 'normal',
  backgroundColor,
  disabled = false,
}: NavigationBarProps) => {

  return (
    <StyledContainer
      data-testid={"NavBar"}
      size={size}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <TextStyling size={size} children="Nigel"/>
      <Dropdown size={size}  />
    </StyledContainer>
  );
};

export { NavigationBar };