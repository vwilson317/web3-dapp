// ThemeProvider.tsx

import React from 'react';
// import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import '../src/styles/theme.scss';
const theme = createGlobalStyle({
});

const ThemeProviderCustom: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
);

export default ThemeProviderCustom;
