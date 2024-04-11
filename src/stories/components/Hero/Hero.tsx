/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { HeroProps } from './Hero.types';



const StyledHeroWrapper = styled.img<HeroProps>`
  display: block;
  border: 0 solid white;
  border-radius: 10%;

  ${({ size }) => size === 'mobile' ? css`
    width: 55px;
    height: 65px;

  ` : css`
    width: 120px;
    height: 135px;

  `};

  ${({ disabled }) => disabled ? css`
    opacity: 50%;
  `:css`
    opacity: 100%;
  `};
`;

export const Hero: React.FC<HeroProps> = ({

}) => {
  return (
    <>
      <StyledHeroWrapper />
    </>
  );
};