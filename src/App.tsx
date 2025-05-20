import { Box } from "@chakra-ui/react";
import "./css/Universal.css";

import { useColorContext } from "./context/Color";
import useGetJSON from "./utils/GetJSON";
import Theme from "./theme/Theme";
import UpperNavigation from "./component/UpperNavigation";
import Main from "./component/Main";
import UpperBumper from "./component/UpperBumper";
import Footer from "./component/Footer";

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

function App() {
  const prime = useColorContext() as ColorKey;
  const root = document.getElementById("root");
  // console.log("Theme", Theme().colors[prime].darkest);
  if (root) {
    root.style.backgroundColor = Theme().colors[prime].darkest;
  }
  document.body.style.backgroundColor = Theme().colors[prime].darkest;

  const data = useGetJSON({});
  // console.log("data", data);

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
        <UpperBumper />
        <Main data={data} />
        <Footer />
      </Box>
    </>
  );
}

export default App;
