import { createTheme } from "@mui/material/styles";

interface SurfaceColors {
  subtle: string;
  raised: string;
  tinted: string;
  tintedStrong: string;
  inverse: string;
  inverseRaised: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    surface: SurfaceColors;
  }

  interface PaletteOptions {
    surface?: SurfaceColors;
  }
}

export const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  spacing: 4,
  shape: { borderRadius: 16 },
  palette: {
    primary: {
      main: "#016596",
      light: "#03AEF4",
      dark: "#074E73",
      contrastText: "#FFFFFF",
    },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#23272E", secondary: "#64748B" },
    divider: "#D5DAE2",
    surface: {
      subtle: "#F6F7F9",
      raised: "#ECEEF2",
      tinted: "#EFF9FF",
      tintedStrong: "#DFF3FF",
      inverse: "#23272E",
      inverseRaised: "#343A46",
    },
  },
  typography: {
    fontFamily: "var(--font-vazirmatn), sans-serif",
    h1: {
      fontSize: "2.25rem",
      lineHeight: 48 / 36,
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontWeight: 600,
      letterSpacing: "-0.014em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 26 / 16,
      fontWeight: 400,
      letterSpacing: "-0.014em",
    },
  },
});
