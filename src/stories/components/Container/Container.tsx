import styled from 'styled-components';
import { ContainerProps } from './Container.types';

/**
When implementing a dark mode/light mode theme, it can be beneficial not to hard-code a background color on your container. Instead, here are some approaches and considerations for a more flexible implementation:

1. Use CSS Variables for Theme Colors
Define CSS variables for both dark and light themes in your global styles. This way, you can change the background color based on the theme without directly modifying the container's styles.
css
Copy code
:root {
    --background-color: #ffffff; /* Light mode 
    --text-color: #000000; /* Light mode text 
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #242424; /* Dark mode 
        --text-color: #ffffff; /* Dark mode text 
    }
}
2. Container Implementation
In your Container.tsx, use the CSS variables instead of setting a hard-coded background color. This allows the background color to automatically adjust based on the theme.
tsx
Copy code
const StyledContainer = styled.div<ContainerProps>`
    background-color: var(--background-color);
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
`;
3. No Background Color on the Container
If you don't set a background color on the container, it will inherit the background from the body or other parent elements. If those are using CSS variables, the container will automatically adapt to light/dark modes.
4. Considerations for Text Color
Just as with the background color, use CSS variables for text colors to ensure that text remains legible in both themes.
5. Theme Toggle Logic
Implement a toggle button to switch between themes. This can be done using local storage or state management to persist the user's choice.
tsx
Copy code
const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
};
Example Implementation
Here’s a simple example of how you might implement dark mode/light mode:

Global Styles with CSS Variables:

css
Copy code
:root {
    --background-color: #ffffff;
    --text-color: #000000;
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #242424;
        --text-color: #ffffff;
    }
}
Container Component:

tsx
Copy code
const StyledContainer = styled.div<ContainerProps>`
    background-color: var(--background-color);
    color: var(--text-color);
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
`;
Theme Toggle Logic:

tsx
Copy code
const ThemeToggleButton = () => {
    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};
Conclusion
By using CSS variables and not hard-coding a background color on your container, you allow for greater flexibility in theming. This approach makes it easier to manage colors across different components and ensures consistency when switching between light and dark modes.
 */

const StyledContainer = styled.div<ContainerProps>`
    /* background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'}; */
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const Container = ({
    backgroundColor,
    size = "normal",
    children,
}: ContainerProps) => {
    return (
        <StyledContainer 
        // style={{ backgroundColor }} 
        size={size} 
        data-testid={"container"}>
            { children }
        </StyledContainer>
    );
};

export { Container };