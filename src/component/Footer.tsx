import { Box, Text, HStack } from "@chakra-ui/react";
import Linkedin from "../graphics/Linkedin";
import Email from "../graphics/Email";

const Footer = () => {
  const linkedinClick = () => {
    window.open("https://www.linkedin.com/in/larrydeguzman/", "_blank");
  };
  const emailClick = () => {
    window.open("mailto:lawrence@deguzman5.com", "_blank");
  };
  return (
    <>
      <Box
        justifyContent="center"
        height="50px"
        alignItems="bottom"
        display="flex"
      >
        <HStack>
          <Linkedin width="50px" click={linkedinClick} />
          <Email width="50px" click={emailClick} />
        </HStack>
      </Box>
      <Box
        justifyContent="center"
        height="50px"
        alignItems="top"
        display="flex"
      >
        <Text fontSize={12}>© 2025 DEGUZMAN5.com All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
