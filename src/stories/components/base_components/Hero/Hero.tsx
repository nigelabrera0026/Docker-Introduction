/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

import styled, { css } from 'styled-components';
import { HeroProps } from './Hero.types';

const HeroComponent = styled.img<HeroProps>`
  display: block;
  border: 0 solid white;
  border-radius: 10%;

  ${({ size }) => size === 'mobile' ? css`
    width: 304px;
    height: 171px;

  ` : css`
    width: 609px;
    height: 342.6px;

  `};

  ${({ disabled }) => disabled ? css`
    opacity: 50%;
  `:css`
    opacity: 100%;
  `};
`;

export const Hero = ({src, alt, size = 'normal', disabled, backgroundColor}: HeroProps) => {
  return (
    <div style={{backgroundColor}}>
      <HeroComponent disabled={disabled} src={src} alt={alt} size={size} data-testid={"Hero"}/>
    </div>
  );
};
