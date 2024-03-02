/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
// import React, { ReactNode, createContext, useContext, useState } from 'react';
// import { ThemeProvider as  StyledThemeProvider } from 'styled-components';
// import { lightTheme } from './themes/lightTheme';
// import { darkTheme } from './themes/darkTheme';

// interface ThemeProviderProps {
//   children: ReactNode;
//   theme: 'light' | 'dark'; // Optionally specify your theme type here
// }

// const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
//   return (
//     <StyledThemeProvider theme={theme}>
//       {children}
//     </StyledThemeProvider>
//   );
// };

// export default ThemeProvider;

// interface ThemeContextType {
//   theme: 'light' | 'dark';
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light',
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
