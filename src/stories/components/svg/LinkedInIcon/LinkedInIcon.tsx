import styled, { css } from 'styled-components';
import { LinkedInIconProps } from './LinkedInIcon.types';

// TODO: Develop the disabled state
const LinkedInSVG = styled.svg<LinkedInIconProps>`
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


const LinkedInIcon = ({ 
    size='normal',
    backgroundColor, 
}: LinkedInIconProps) => {
  return (
    <a href="https://www.linkedin.com/in/nigel-a-1a5093288/" target="_blank">
      <LinkedInSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        size={size}
        data-testid={"Icon-LinkedIn"}
        color={backgroundColor} // Optional prop to change color
      >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
      />
      </LinkedInSVG>
    </a>
  );
};

export { LinkedInIcon };