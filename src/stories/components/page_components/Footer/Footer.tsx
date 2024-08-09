/**
 * Footer component
 * @author Nigel Abrera
 * @date   August 6th, 2024
 */

import { FooterProps } from "./Footer.types";
import styled, { css } from 'styled-components';
import { Text } from "../../base_components/Text";
const FooterContainer = styled.div<FooterProps>`

`;

const FooterText = styled(Text)<{size}>`

`;

// Make this something of holding some logos
// const item = styled


const Footer = ({


}: FooterProps) => {

    return(
        <FooterContainer>
            
        </FooterContainer>

    );
};

export { Footer };