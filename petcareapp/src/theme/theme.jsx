import React, { Children, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Custom MUI component
const theme = createTheme({
    palette: {
        primary: {
            main: '#FD7E1F',
        },
        secondary: {
            main: '#4B5175',
        },
        info: {
            main: '#FECBA1',
        },
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#4B5175',
                    fontSize: '18px',
                    fontWeight: '400',
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    color: '#4B5175',
                    fontSize: '20px',
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {},
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#FD9843',
                        borderColor: '#d90f45',
                        boxShadow: 'none',
                    },
                    '&:active': {
                        boxShadow: 'none',
                        backgroundColor: '#FEB272',
                        borderColor: '#ce0041',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    
                }
            }
        }
    },
});

export const Theme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
