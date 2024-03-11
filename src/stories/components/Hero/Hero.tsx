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

const StyledText = styled(Text)`

`;

const StyledImg = styled(Image)`

`;

export const Hero: React.FC<HeroProps> = ({

}) => {
  return (
    <StyledHeroWrapper>
      <Text size={'medium'}>Hi I'm</Text><br/>
      <Text size={'large'}>Nigel Abrera</Text><br/>
      <Text size={'medium'}>and I'm a developer.</Text>
      <Image size={"normal"} src={"../../../public/IMG_2441Copy"} alt={'Something'}/>
    </StyledHeroWrapper>
  );
};