import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#174d3b',
      light: '#2d7a5e',
      dark: '#0e3427',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2d7a5e',
      light: '#429e7c',
      dark: '#1b4d3b',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#84b82a',
      light: '#c9ed75',
      dark: '#588018',
      contrastText: '#15231e',
    },
    mern: {
      main: '#16704d',
      light: '#e6f4ee',
    },
    playwright: {
      main: '#b94743',
      light: '#faebea',
    },
    background: {
      default: '#f6f8f5',
      paper: '#ffffff',
      dark: '#103b2e',
      alt: '#eef2ec',
    },
    text: {
      primary: '#15231e',
      secondary: '#55655e',
    },
    divider: '#dde4dc',
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.035em',
      color: '#15231e',
    },
    h2: {
      fontWeight: 800,
      fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      color: '#15231e',
    },
    h3: {
      fontWeight: 700,
      fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.35,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.65,
      color: '#55655e',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
      color: '#34433d',
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: '#55655e',
    },
    mono: {
      fontFamily: ['JetBrains Mono', 'Menlo', 'monospace'].join(','),
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '10px 22px',
          fontSize: '0.95rem',
          transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          backgroundColor: '#174d3b',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(23, 77, 59, 0.18)',
          '&:hover': {
            backgroundColor: '#0e3427',
            boxShadow: '0 6px 20px rgba(23, 77, 59, 0.28)',
          },
        },
        outlinedPrimary: {
          borderColor: '#dde4dc',
          backgroundColor: 'transparent',
          color: '#174d3b',
          '&:hover': {
            borderColor: '#2d7a5e',
            backgroundColor: 'rgba(23, 77, 59, 0.06)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #dde4dc',
          boxShadow: '0 4px 20px rgba(23, 77, 59, 0.04)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: '#2d7a5e',
            boxShadow: '0 12px 32px rgba(23, 77, 59, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 10,
          fontSize: '0.85rem',
          transition: 'all 0.2s ease',
        },
      },
    },
  },
});
