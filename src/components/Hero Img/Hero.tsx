/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { HeroProps } from './Hero.types';
import { Text } from '../Text/Text';
import { Image } from '../Image/Image';


const StyledHeroWrapper = styled.div<HeroProps>`
  display: inline-block;
`;

// const

export const Hero: React.FC<HeroProps> = ({

}) => {
  return (
    <StyledHeroWrapper>

    </StyledHeroWrapper>
  );
};