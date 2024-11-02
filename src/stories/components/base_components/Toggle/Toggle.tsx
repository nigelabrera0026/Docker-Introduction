import styled, { css } from 'styled-components';
import { useState, useCallback } from 'react';
import { ToggleProps } from './Toggle.types';

/**
 * TODO: Imbue this on the navigation
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
    background-color: ${({ backgroundColor, isChecked }) => isChecked ? backgroundColor || '#000':"#2196F3"};
    transition: 0.4s;
    border-radius: 34px;

    &::before {
        position: absolute;
        content: ""; // TODO: Change content to add an SVG of sun and moon when switched using the function below. 
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
        transform: ${({ isChecked }) =>
            isChecked ? 'translateX(26px)' : 'translateX(0)'
            };
    };
`;

const Toggle = ({
    size = 'normal',
    backgroundColor,
    onChange
}: ToggleProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = useCallback(() => {
        const theme = !isChecked;
        setIsChecked(theme);

        if (onChange) {
            onChange(theme); 
        };
    }, [isChecked, onChange]);

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
