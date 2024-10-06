import { FooterProps } from "./Footer.types";
import styled, { css } from 'styled-components';
import { Text } from "../../base_components/Text";
import { GithubIcon} from "../../base_components/Icon";

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
// TODO: Create icon holder, with anchor tag props

const FooterIcons1 = styled(GithubIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 24px;
    height: 24px;
  `};
`;

const FooterIcons2 = styled(GithubIcon)<{size?: 'mobile' | 'normal'}>`
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

// Footer UL
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

/**
 * TODO: insert the icons
 */


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
                        <FooterIcons1 size={size}/>
                        <FooterIcons2 size={size}/>
                        
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
