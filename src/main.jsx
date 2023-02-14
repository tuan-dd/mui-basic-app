import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './main.css';
import RootProvider from './context/rootProvider';
import App from './app';

const theme = createTheme({
   palette: {
      primary: {
         light: '#757ce8',
         main: '#3f50b5',
         dark: '#002884',
         contrastText: '#fff',
      },
      secondary: {
         light: '#ff7961',
         main: '#f44336',
         dark: '#ba000d',
         contrastText: '#000',
         blueGrey: '#37474f',
      },
      typography: {
         fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
         ].join(','),
      },
   },
   typographyTwo: {
      fontFamily: 'Arial',
   },
});

ReactDOM.createRoot(document.getElementById('root')).render(
      <RootProvider>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </RootProvider>
);
