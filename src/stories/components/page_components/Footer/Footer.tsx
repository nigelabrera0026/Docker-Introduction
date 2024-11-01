import { FooterProps } from "./Footer.types";
import styled, { css } from 'styled-components';
import { Text } from "../../base_components/Text";
import { GithubIcon } from "../../svg/GithubIcon";
import { LinkedInIcon } from "../../svg/LinkedInIcon";
import { SOIcon } from "../../svg/SOIcon";
import { MailIcon } from "../../svg/MailIcon";
import { Loc } from "../../svg/LocationIcon";

// Date
const date = new Date();
let year = date.getFullYear();

// Adjusted Components
const Github = styled(GithubIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 30px;
    height: 30px;
  `};
`;

const LinkedIn = styled(LinkedInIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 30px;
    height: 30px;
  `};
`;

const SO = styled(SOIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 30px;
    height: 30px;
  `};
`;

const FooterText = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  color: white;
  ${({size}) => size === 'mobile' ? css`
      font-size: 10px;
  `: css`
      font-size: 15px;
  `};
  margin: 0; // Sets the footer stick at the bottom
  padding-left: 50px;
`;

const FooterTextContactInfo = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  color: white;
  ${({size}) => size === 'mobile' ? css`
      font-size: 10px;
  `: css`
      font-size: 20px;
  `};

  margin: 0; 
  padding-bottom: 10px;
`;


const Mail = styled(MailIcon)<{size?: 'mobile' | 'normal'}>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 30px;
    height: 30px;
  `};
`;

// Components
const FooterContainer = styled.footer<FooterProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #6482AD;
`;

const FooterDiv = styled.div<FooterProps>`
  margin-bottom: 10px;
`;

const FooterUL = styled.ul<FooterProps>`
  list-style: none;
  padding: 0px 0px;
  padding-top: 20px; // Space below the icons
  margin: 0; // Sets the footer stick at the bottom
`;

const FooterUL2 = styled.ul<FooterProps>`
  list-style: none;
  padding-right: 70px;
  margin-top: 20px;
`;

const FooterUL3 = styled.ul<FooterProps>`
  list-style: none;
  padding: 0px 20px;
  margin: 0;
`;

const FooterLI = styled.li<FooterProps>`
  text-decoration: none;
  display:inline;
  padding: 20px 20px; // Sets the spaces in the icons

`;


const Footer = ({
  backgroundColor,
  size='normal',
}: FooterProps) => {
  return (
    <FooterContainer
      data-testid={'Footer'}
      size={size}
      backgroundColor={backgroundColor}
    > {/* Footer Container - A div separating the 2 sides, icons w/ cred and contact info. */}
      <FooterDiv>{/* A div container that holds icons and the credentials on the left side.*/}
        <FooterUL3>{/* Container to separate them up and down. */}
          <FooterLI>{/* Container for the icons to separate them side by side. */}
            <Github size={size}/> {/* Icons */}
          </FooterLI>
          <FooterLI> {/* Container for the icons to separate them side by side. */}
            <LinkedIn size={size}/> {/* Icons */}
          </FooterLI>
          <FooterLI> {/* Container for the creds to separate them under the icons. */}
            <SO size={size}/>
          </FooterLI>
        </FooterUL3>
        <FooterUL>{/* Container for the creds to separate them under the icons. */}
          <FooterText>{/* Modified Text Component */}
           {`© Copyright ${year} Nigel Abrera. All Rights Reserved.`}
          </FooterText>
        </FooterUL>
      </FooterDiv>
      <FooterDiv> {/* A div container that is set for contact info on the right side*/}
        <FooterUL2> { /* Add a mail component with function to redirect */}
          <FooterTextContactInfo>CONTACT INFORMATION</FooterTextContactInfo>
          <Loc/>
          <Mail/>
        </FooterUL2>
      </FooterDiv>
    </FooterContainer>
  );
};

export { Footer };