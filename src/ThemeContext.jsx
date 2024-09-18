import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#800000', // Maroon
    },
    secondary: {
      main: '#8B4513', // Brown
    },
    background: {
      default: '#ffffff', // Light background
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000', // Dark text
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#800000', // Maroon
    },
    secondary: {
      main: '#8B4513', // Brown
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff', // Light text
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
