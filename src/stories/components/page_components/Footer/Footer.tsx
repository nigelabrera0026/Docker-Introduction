import { FooterProps } from "./Footer.types";
import styled, { css } from 'styled-components';
import { Text } from "../../base_components/Text";
import { GithubIcon } from "../../base_components/GithubIcon";
import { LinkedInIcon } from "../../base_components/LinkedInIcon";
import { SOIcon } from "../../base_components/SOIcon";

/*
 * Logic
 * 
 * <FooterContainer>
 *      <FooterNav>
 *          <FooterUL> Add more ul if you need a layer
 *              <footer-li></footer-li>
 *          </footer-ul>
 *      </FooterNav>
 *      <footer-ul>
 *          <footer-li></footer-li>
 *      </footer-ul>
 * </FooterContainer>
 * 
 */

const Github = styled(GithubIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 24px;
    height: 24px;
  `};
`;

const LinkedIn = styled(LinkedInIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 24px;
    height: 24px;
  `};
`;

const SO = styled(SOIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 24px;
    height: 24px;
  `};
`;

const FooterContainer = styled.footer<FooterProps>`
    display: relative;
    margin: auto;
    align-items: center;
    background-color: #6482AD;
`;


const FooterNav = styled.nav<FooterProps>`
    display: flex;
    flex-direction: column;

`;

const FooterContentHolder = styled.ul<FooterProps>`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const FooterContents = styled.li<FooterProps>`
    display: inline;
`;

const FooterText = styled(Text)<{ size?: 'mobile' | 'normal' }>`
    color: white;
    ${({size}) => size === 'mobile' ? css`
        font-size: 10px;
    `: css`
        font-size: 15px;
    `};
`;

const Footer = ({
    size='normal',
    backgroundColor,
}: FooterProps) => {
    return(
        <FooterContainer 
        data-testid={"Footer"} 
        size={size}
        backgroundColor={backgroundColor}>
           <FooterNav size={size}>
                <FooterContentHolder size={size}>
                    <FooterContents size={size}>{/* Icons*/}
                        <Github size={size}/>
                    </FooterContents>
                    <FooterContents size={size}>
                        <LinkedIn size={size}/>
                    </FooterContents>
                    <FooterContents size={size}>
                        <SO size={size} />
                    </FooterContents>
                </FooterContentHolder>
           </FooterNav>
           <FooterNav size={size}>
                <FooterContentHolder size={size}>
                    <FooterContents size={size}> {/* Credits*/}
                        <FooterText size={size} 
                        children="Copyright &#169; 2024 Nigel Abrera. All Rights Reserved."/>
                    </FooterContents>
                </FooterContentHolder>
           </FooterNav>
        </FooterContainer>

    );
};

export { Footer };
/*
// Toggle.tsx
import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Toggle = ({ isChecked, onChange }: { isChecked: boolean; onChange: () => void }) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider />
    </ToggleContainer>
  );
};

export default Toggle;







*/