/**
 * Container for the main page.
 * @author Nigel Abrera
 * @date   July 29, 2024
 */

import styled from 'styled-components';
import { ContainerProps } from './Container.types';

const StyledContainer = styled.div<ContainerProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
    width: 100%;
    padding: 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Container = ({
    backgroundColor,
    size = "normal",
    children,
}: ContainerProps) => {
    return (
        <StyledContainer 
        style={{ backgroundColor }} 
        size={size} 
        data-testid={"container"}>
            { children }
        </StyledContainer>

    );
};

export { Container };