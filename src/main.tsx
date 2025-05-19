import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Color } from "./context/Color";
import Theme from "./theme/Theme";
import App from "./App.tsx";

// console.log(extendTheme(Theme).colors);
const colors = Object.keys(Theme().colors);
const randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log("randomColor", randomColor);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Color.Provider value={randomColor}>
      <ChakraProvider theme={extendTheme(Theme)}>
        <App />
      </ChakraProvider>
    </Color.Provider>
  </StrictMode>
);
