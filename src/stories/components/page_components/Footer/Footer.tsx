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

// Date
const date = new Date();
let year = date.getFullYear();

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
                        <FooterText size={size}>{`© Copyright ${year} Nigel Abrera. All Rights Reserved.`}</FooterText>
                    </FooterContents>
                </FooterContentHolder>
           </FooterNav>
        </FooterContainer>

    );
};

export { Footer };