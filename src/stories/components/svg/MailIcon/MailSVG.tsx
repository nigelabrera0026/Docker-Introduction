import styled, { css } from "styled-components";
import { MailProps } from "./MailSVG.types";
import { Text } from "../../base_components/Text";

/*
TODO: Layer the components using list items so it would align its children.

Logic

<div>
    <ul>
        <a>
            <svg>
                <text></text>
            </svg>
        </a>
    </ul>
    <ul> // You probably only need one.
        <a>
            <svg>
                <text></text>
            </svg>
        </a>
    </ul>
</div>

*/

const AnchorContainer = styled.a<MailProps>`
    text-decoration: none;
    display:flex;
    align-items: center;
`;


const MailSVG = styled.svg<MailProps>`
    fill: ${({ backgroundColor }) => backgroundColor || '#ffff' };
    ${({ size }) => size === 'mobile' ? css`
        width: 15px;
        height: 15px;
    ` : css`
        width: 30px;
        height: 30px;
    `}
`;

const Content = styled(Text)<MailProps>`
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

const MailIcon = ({
    size='normal',
    backgroundColor,
}: MailProps) => {
    return (
        <AnchorContainer href="mailto:nigel26.a@gmail.com">
            <MailSVG
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                size={size}
                data-testid={"Icon-Mail"}
                color={backgroundColor}
            >
                <title>Email Icon</title>
                <desc>An SVG that represents an mail icon.</desc>
                <path
                    stroke="#6482AD" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                />
            </MailSVG>
            <Content>nigel26.a@gmail.com</Content>
        </AnchorContainer>  
    );
};

export { MailIcon };