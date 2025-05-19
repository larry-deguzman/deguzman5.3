import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import "./css/Universal.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box
        minH="100vh"
        m={0}
        p={0}
        bg="prime.darkest"
        mx="auto"
        h="100px"
        w={[325, 416, 546, 694, 894, 1020, 1428]}
      >
        <Text className="normal-text" color="prime.white">
          Screen width: {width}px // here's where all the junk goes.
        </Text>
      </Box>
    </>
  );
}

export default App;
