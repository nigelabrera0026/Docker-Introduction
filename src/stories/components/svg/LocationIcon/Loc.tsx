import styled, { css } from "styled-components";
import { LocProps } from "./Loc.types";
import { Text } from "../../base_components/Text";



const AnchorContainer = styled.a<LocProps>`
    text-decoration: none;
    display:flex;
    align-items: center;
`;


const LocSVG = styled.svg<LocProps>`
    fill: ${({ backgroundColor }) => backgroundColor || '#ffff' };
    ${({ size }) => size === 'mobile' ? css`
        width: 15px;
        height: 15px;
    ` : css`
        width: 30px;
        height: 30px;
    `}
`;

const Content = styled(Text)<LocProps>`
    display: inline-flex; // Makes the icon go beside the content.
    color: white;
    margin: 0px;
    padding-left: 5px;
    ${({size}) => size === 'mobile' ? css`
        font-size: 10px;
    `: css`
        font-size: 15px;
    `};
`;

const Loc = ({
    size='normal',
    backgroundColor,
}: LocProps) => {
    return (
        <AnchorContainer href="https://www.google.com/maps/place/Winnipeg,+MB/@49.8537806,-97.1528398,11z/data=!3m1!4b1!4m6!3m5!1s0x52ea73fbf91a2b11:0x2b2a1afac6b9ca64!8m2!3d49.8954221!4d-97.1385145!16zL20vMHBtcTI?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
            <LocSVG
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                size={size}
                data-testid={"Icon-Loc"}
                color={backgroundColor}
            >
                <title>Location Icon</title>
                <desc>An SVG that represents a pinpoint icon.</desc>
                <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#6482AD"
                />
            </LocSVG>
            <Content>Winnipeg, MB, CA</Content>
        </AnchorContainer>  
    );
};

export { Loc };