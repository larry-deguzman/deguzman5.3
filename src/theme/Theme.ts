const theme = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  breakpoints: {
    base: "360px",
    sm: "420px",
    md: "550px",
    lg: "700px",
    xl: "900px",
    "2xl": "1024px",
    "3xl": "1436px",
  },
  colors: {
    prime: {
      black: "#000000",
      darkest: "#537D5D",
      dark: "#73946B",
      light: "#9EBC8A",
      lightest: "#D2D0A0",
      white: "#FFFFFF",
    },
    dark: {
      black: "#000000",
      darkest: "#222831",
      dark: "#393E46",
      light: "#948979",
      lightest: "#DFD0B8",
      white: "#FFFFFF",
    },
  },
  styles: {
    global: {
      "html, body, #root": {
        margin: 0,
        padding: 0,
        height: "100%",
        bg: "prime.darkest",
      },
    },
  },
  header: {
    height: {
      base: "50px",
      sm: "60px",
      md: "70px",
      lg: "80px",
      xl: "80px",
      "2xl": "80px",
      "3xl": "80px",
    },
  },
};

export { theme as Theme };

/*
const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}




*/
