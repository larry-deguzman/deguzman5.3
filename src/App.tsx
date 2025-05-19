import { Box } from "@chakra-ui/react";
import "./css/Universal.css";

import { useColorContext } from "./context/Color";
import Theme from "./theme/Theme";
import UpperNavigation from "./component/UpperNavigation";

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

function App() {
  const prime = useColorContext() as ColorKey;
  const root = document.getElementById("root");
  // console.log("Theme", Theme().colors[prime].darkest);
  if (root) {
    root.style.backgroundColor = Theme().colors[prime].darkest;
  }
  document.body.style.backgroundColor = Theme().colors[prime].darkest;
  return (
    <>
      <Box
        minH="100vh"
        m={0}
        p={0}
        bg={`${prime}.darkest`}
        mx="auto"
        h="100px"
        w={[325, 416, 546, 694, 894, 1020, 1428]}
      >
        <UpperNavigation />
      </Box>
    </>
  );
}

export default App;
