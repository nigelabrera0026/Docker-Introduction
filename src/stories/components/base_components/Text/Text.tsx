import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.6px;

  ${({ primary }) => primary ? css`
    color: #6482AD;
  ` : css`
    color: #FFFFFF;
  `};

  ${({ size }) => size === 'mobile'? css`
      font-size: 10px;
  ` : css`
      font-size: 20px;
  `};

  ${({ disabled }) => disabled && css`color: #333;`};
  ${({ error }) => error && css`color: red;`};
`;

const Text = ({
  size = 'normal',
  backgroundColor,
  error = false,
  children,
  primary = true,
  ...props
}: TextProps) => {
  return (
    <StyledText
      data-testid={"Text"}
      size={ size }
      style={{ backgroundColor }}
      primary={primary}
      error={error} {...props}>
      { children }
    </StyledText>
  );
};

export { Text };