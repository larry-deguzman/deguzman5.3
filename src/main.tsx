import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Theme } from "./theme/Theme";
import App from "./App.tsx";

console.log(extendTheme(Theme));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={extendTheme(Theme)}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
