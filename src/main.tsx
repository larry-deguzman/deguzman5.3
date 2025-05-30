import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Color } from "./context/Color";
import { PlaylistProvider } from "./context/PlaylistContext";

import Theme from "./theme/Theme";
import App from "./App.tsx";

// console.log(extendTheme(Theme).colors);
const colors = Object.keys(Theme().colors);
const randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log("randomColor", randomColor);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Color.Provider value={randomColor}>
      <PlaylistProvider>
        <ChakraProvider theme={extendTheme(Theme)}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PlaylistProvider>
    </Color.Provider>
  </StrictMode>
);
