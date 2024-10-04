/**
 * Footer component
 * @author Nigel Abrera
 * @date   August 6th, 2024
 */

import { FooterProps } from "./Footer.types";
import styled, { css } from 'styled-components';
import { Text } from "../../base_components/Text";

const FooterContainer = styled.footer<FooterProps>`
    display: relative;
    margin: 0;
    /* padding: 0; */
    background-color: #6482AD;
    ${({size}) => size === 'mobile' ? css`

    `:css`
    
    `}
`;

const FooterText = styled(Text)<{ size?: 'mobile' | 'normal' }>`
    color: white;
    ${({size}) => size === 'mobile' ? css`
        font-size: 10px;
    `: css`
        font-size: 20px;
    `};
`;

/**
 * TODO: Fix the structure again, Refer to the vanilla portfolio
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
            <FooterText size={size} children="Created By Nigel A."/>
            {/* Insert the logos here that are transposed into white. */}
        </FooterContainer>

    );
};

export { Footer };