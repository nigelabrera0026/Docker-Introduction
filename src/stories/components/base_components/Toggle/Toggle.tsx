import styled, { css } from 'styled-components';
import { useState, useCallback } from 'react';
import { ToggleProps } from './Toggle.types';

/**
 * TODO: Implement dark mode and shit.
 * 
 */


const StyledLabel = styled.label<ToggleProps>`
    position: relative;
    display: inline-block;
    ${({ size }) =>
        size === 'mobile' ? css`
            width: 40px;
            height: 24px;`
        : css`
            width: 60px;
            height: 34px;
    `};
`;

const StyledInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const StyledSlider = styled.span<ToggleProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ backgroundColor }) => backgroundColor || '#ccc'};
    transition: 0.4s;
    border-radius: 34px;

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
        transform: ${({ isChecked }) =>
            isChecked ? 'translateX(26px)' : 'translateX(0)'};
    };
`;

const Toggle = ({
    size = 'normal',
    backgroundColor,
    ...props
}: ToggleProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = useCallback(() => {
        setIsChecked(!isChecked);

        if (props.onChange) {
            props.onChange();
        };
    }, [isChecked, props]);

    return (
        <StyledLabel size={size}>
            <StyledInput
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
            />
            <StyledSlider
                size={size}
                backgroundColor={backgroundColor}
                isChecked={isChecked}
            />
        </StyledLabel>
    );
};

export { Toggle };
