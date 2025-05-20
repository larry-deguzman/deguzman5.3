export default function Theme() {
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
      sleek: {
        black: "#2C3531",
        darkest: "#116466",
        dark: "#D9B08C",
        light: "#FFCB9A",
        lightest: "#D1E8E2",
        white: "#FFFFFF",
      },
      seafoam: {
        black: "#000000",
        darkest: "#426E6f",
        dark: "#346F6F",
        light: "#DDE9E9",
        lightest: "#FBFFFF",
        white: "#FFFFFF",
      },
      rouge: {
        black: "#000000",
        darkest: "#3D0301",
        dark: "#B03052",
        light: "#D76C82",
        lightest: "#EBE8DB",
        white: "#FFFFFF",
      },
      light: {
        black: "#000000",
        darkest: "#ADB2D4",
        dark: "#C7D9DD",
        light: "#D5E5D5",
        lightest: "#EEF1DA",
        white: "#FFFFFF",
      },
      blue: {
        black: "#000000",
        darkest: "#112D4E",
        dark: "#3F72AF",
        light: "#DBE2EF",
        lightest: "#F9F7F7",
        white: "#FFFFFF",
      },
      green: {
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
          bg: ``,
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
  return theme;
}
