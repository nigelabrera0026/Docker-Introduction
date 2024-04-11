/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/
import styled, { css } from 'styled-components';
import { LabelProps } from './Label.types';
import { Text } from '../Text/Text';

const LabelContainer = styled.div<LabelProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `};
`;

const Input = styled.input<LabelProps>`
  width: 100%;
  margin-top: 4px;
  padding: ${({ variant }) => variant === 'mobile' ? '9px' : '14px'};
  border: 1px solid #F1B080;
  border-radius: 4px;

  ${({ variant }) => variant === 'mobile' ? css`
    font-size: 10px;
  ` : css`
    font-size: 15px;
  `}

  &:disabled {
    border-color: #333;
    background-color: #ccc;
    color: #333;
  }

  ${({ error }) => error && css`
    border-color: red;
  `}
`;

export const Label = ({
  label = "Email Address",
  variant = 'normal',
  error = false,
  ...props
}: LabelProps) => {
  return (
    <LabelContainer variant={variant} {...props}>
      <Text size={variant} primary={true} error={error}>{label}</Text>
      <Input variant={variant} error={error} {...props} />
    </LabelContainer>
  );
};



// import styled, { css } from 'styled-components';
// import { LabelProps } from './Label.types';
// import { Text } from '../Text/Text';

// const LabelContainer = styled.div<LabelProps>`
//   display: inline-block;
//   ${({ variant }) => variant === 'mobile' ?
//     css`
//       font-size: 10px;
//     ` : css`
//       font-size: 25px;
//     `};

//   ${({disabled}) => disabled && css`
//     border-color: #333;
//   `};
// `;

// const LabelWrapper = styled.label<LabelProps>`
//   display: inline-block;

//   &:disabled {
//     color: #333;
//   }

//   ${({ error }) => error && css`
//     color: red;th
//   `}

// `;

// const Input = styled.input<LabelProps>`
//   width: 100%;

//   ${({ variant }) => variant === 'mobile' ?
//     css`

//       padding: 8px;
//       border: 1px solid #F1B080;
//       border-radius: 4px;
//     ` : css`

//       padding: 8px 15px 8px 15px;
//       border: 1px solid #F1B080;
//       border-radius: 4px;
//     `};

//   &:disabled {
//     border: 1px solid #333;
//   }


//   ${({ error }) => error && css`border-color:  red;`}

// `;


// export const Label = ({
//   label="Email Address",
//   variant='normal',
//   error=false,
//   ...props
// }:LabelProps) => {
//   return(
//     <LabelContainer error={error} variant={variant} >
//       <LabelWrapper error={error} variant={variant}>
//         <Text size={variant} primary={true} error={error} {...props}>{label}</Text>
//       </LabelWrapper>
//       <Input {...props} error={error}/>
//     </LabelContainer>
//   );
// };
