
'use-client'
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Colors } from "./colors";

// Font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})


// Create custom theme

// Using Module augument
declare module '@mui/material/styles' {
  interface Components {
    MainButtonComponent: {}
  }
}


export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light', // or 'dark', if you prefer
    primary: {
      main: Colors.primary.main,
      light: Colors.primary.light,
      dark: Colors.primary.dark,
      contrastText: Colors.primary.contrastText,
    },
    background: {
      default: Colors.background.default,
      paper: Colors.background.paper,
    },
    text: {
      primary: Colors.text.primary,
      secondary: Colors.text.secondary,
    },
  },
  components: {
    MainButtonComponent: {
      styleOverrides: {
        root: {
          padding: '2px 20px',
          border: `1px solid  ${Colors.text.secondary}`,
          borderRadius:'50px', 
        
        }
      }
    }
  }
});