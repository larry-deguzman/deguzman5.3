// import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./css/Universal.css";

import UpperNavigation from "./component/UpperNavigation";

function App() {
  return (
    <>
      <Box
        minH="100vh"
        m={0}
        p={0}
        bg="prime.dark"
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

/*
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

        <Text className="normal-text" color="prime.white">
          Screen width: {width}px // here's where all the junk goes.
        </Text>
*/
