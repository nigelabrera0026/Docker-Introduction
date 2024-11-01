import styled, { css } from "styled-components";
import { SOIconProps } from "./SOIcon.types";

// TODO: Develop the disabled state
const SOSVG = styled.svg<SOIconProps>`
  ${({size}) => size === 'mobile' ? css`
    width: 15px;
    height: 15px;
  `:css`
    width: 50px;
    height: 50px;
  `};
  padding-top: 20px;
  fill: ${({ backgroundColor }) => backgroundColor || '#fff'}; 

`;

const SOIcon = ({
    size='normal',
    backgroundColor, 
}: SOIconProps) => {
  return (
    <a href="https://stackoverflow.com/users/11917599/mr-purp" target="_blank">
      <SOSVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          size={size}
          data-testid={"Icon-Github"}
          color={backgroundColor} // Optional prop to change color
      >
        <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"
        />
      </SOSVG>
    </a>
  );
};

export { SOIcon };