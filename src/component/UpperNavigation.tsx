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
    <Box id="UpperNavigation" m="auto" w="50%" height={"header.height"}>
      <Logomark headerHeight={{ height: "header.height" }} />
    </Box>
  );
};

export default UpperNavigation;
