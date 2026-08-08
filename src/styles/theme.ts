import { alpha, createTheme, responsiveFontSizes } from '@mui/material';
import type { CSSProperties } from 'react';
import { colorPalette } from './colors';
import { fontFamily, fontSize } from './typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleXXL: CSSProperties;
    titleXL: CSSProperties;
    titleLG: CSSProperties;
    titleMD: CSSProperties;
    titleSM: CSSProperties;
    titleXS: CSSProperties;
    bodyLG: CSSProperties;
    bodyMD: CSSProperties;
    bodySM: CSSProperties;
    bodyXS: CSSProperties;
    bodyXXS: CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleXXL?: CSSProperties;
    titleXL?: CSSProperties;
    titleLG?: CSSProperties;
    titleMD?: CSSProperties;
    titleSM?: CSSProperties;
    titleXS?: CSSProperties;
    bodyLG?: CSSProperties;
    bodyMD?: CSSProperties;
    bodySM?: CSSProperties;
    bodyXS?: CSSProperties;
    bodyXXS?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleXXL: true;
    titleXL: true;
    titleLG: true;
    titleMD: true;
    titleSM: true;
    titleXS: true;
    bodyLG: true;
    bodyMD: true;
    bodySM: true;
    bodyXS: true;
    bodyXXS: true;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      light: colorPalette.primary.medium,
      main: colorPalette.primary.brand,
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: colorPalette.secondary.light,
      main: colorPalette.secondary.medium,
      dark: colorPalette.secondary.dark,
      contrastText: '#FFFFFF',
    },
    background: {
      default: colorPalette.gray[100],
      paper: '#FFFFFF',
    },
    text: {
      primary: colorPalette.gray[900],
      secondary: colorPalette.gray[500],
    },
    divider: colorPalette.gray[200],
    success: { main: colorPalette.feedback.success },
    warning: { main: colorPalette.feedback.alert },
    error: { main: colorPalette.feedback.error },
  },
  typography: {
    fontFamily,
    titleXXL: {
      fontSize: `${fontSize.titleXXL}px`,
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    titleXL: {
      fontSize: `${fontSize.titleXL}px`,
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    titleLG: {
      fontSize: `${fontSize.titleL}px`,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    titleMD: {
      fontSize: `${fontSize.titleMD}px`,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    titleSM: {
      fontSize: `${fontSize.titleSM}px`,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    titleXS: {
      fontSize: `${fontSize.titleXS}px`,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    bodyLG: {
      fontSize: `${fontSize.bodyL}px`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodyMD: {
      fontSize: `${fontSize.bodyMD}px`,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    bodySM: {
      fontSize: `${fontSize.bodySM}px`,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    bodyXS: {
      fontSize: `${fontSize.bodyXS}px`,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    bodyXXS: {
      fontSize: `${fontSize.bodyXXS}px`,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    h1: { fontSize: `${fontSize.titleXXL}px`, fontWeight: 800 },
    h2: { fontSize: `${fontSize.titleXL}px`, fontWeight: 700 },
    h3: { fontSize: `${fontSize.titleL}px`, fontWeight: 700 },
    h4: { fontSize: `${fontSize.titleMD}px`, fontWeight: 600 },
    h5: { fontSize: `${fontSize.titleSM}px`, fontWeight: 600 },
    h6: { fontSize: `${fontSize.titleXS}px`, fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: `${fontSize.bodySM}px`,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          titleXXL: 'h1',
          titleXL: 'h2',
          titleLG: 'h3',
          titleMD: 'h4',
          titleSM: 'h5',
          titleXS: 'h6',
          bodyLG: 'p',
          bodyMD: 'p',
          bodySM: 'p',
          bodyXS: 'p',
          bodyXXS: 'p',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          boxShadow: 'none',
          borderRadius: '8px',
          '&:hover': {
            boxShadow: `0 4px 12px ${alpha(colorPalette.primary.brand, 0.2)}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: `0 4px 20px ${alpha(colorPalette.gray[900], 0.05)}`,
          border: `1px solid ${colorPalette.gray[100]}`,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          color: colorPalette.gray[200],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.primary.medium,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.primary.brand,
            borderWidth: '2px',
          },
          '&.Mui-disabled': {
            backgroundColor: colorPalette.gray[100],
          },
        },
        notchedOutline: {
          borderColor: colorPalette.gray[200],
          transition: 'border-color 0.2s ease-in-out',
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
