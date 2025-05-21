import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import type { ColorKey } from "../types/GenericTypes";
import { useColorContext } from "../context/Color";
import Logomark from "../graphics/Logomark";

const UpperNavigation = () => {
  const [, setScrollY] = useState(0);
  const prime = useColorContext() as ColorKey;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        id="UnderBox"
        bg={`${prime}.darkest`}
        sx={{ position: "fixed", width: "100%" }}
      >
        <Box
          id="UpperNavigation"
          ml={2}
          w={[100, 130, 160, 200, 300, 350, 400]}
          height={"header.height"}
          bg={`${prime}.darkest`}
        >
          <Logomark headerHeight={{ height: "header.height" }} />
        </Box>
      </Box>
    </>
  );
};

export default UpperNavigation;
