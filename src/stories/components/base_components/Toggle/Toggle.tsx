import styled, { css } from 'styled-components';
import { useState, useCallback } from 'react';
import { ToggleProps } from './Toggle.types';

/**
 * TODO: This component is broken, slider is not showing up.un 
 * - Color is dumb, change it,
 * - The problem is that it is not clickable, you might want to check its function.
 * 
 */


const StyledLabel = styled.label<ToggleProps>`
    position: relative;
    display: inline-block;
    ${({ size }) => size === 'mobile'? css`
        width: 60px;
        height: 34px;
    ` : css`
        width: 60px;
        height: 34px;
    `};
`;

const StyledInput = styled.input<ToggleProps>`
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
    background-color: white;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
        position: absolute;
        /* content: ""; */
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    };
`;

const Toggle = ({
    size = 'normal',
    ...props
}: ToggleProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = useCallback(() => {
        setIsChecked(true);

        if(props.onToggle) {
            props.onToggle();
        };
    }, [props]);
    return (
        <StyledLabel size={size}>
            <StyledInput size={size} onToggle={handleToggle}/>
            <StyledSlider size={size}/>
        </StyledLabel>
    );
};

export { Toggle };