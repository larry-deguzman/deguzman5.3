import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Logomark from "../graphics/Logomark";
const UpperNavigation = () => {
  const [, setScrollY] = useState(0);

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
    <Box
      id="UpperNavigation"
      ml={2}
      w={[100, 130, 160, 200, 300, 350, 400]}
      height={"header.height"}
    >
      <Logomark headerHeight={{ height: "header.height" }} />
    </Box>
  );
};

export default UpperNavigation;
