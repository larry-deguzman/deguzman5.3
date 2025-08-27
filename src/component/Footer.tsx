import { Box, Text, HStack } from "@chakra-ui/react";

import { useWindowWidth } from "../utils/Utilities";

import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

import Linkedin from "../graphics/Linkedin";
import Email from "../graphics/Email";

type Props = {
  showingAudio: boolean;
};
type ColorKey = keyof ReturnType<typeof Theme>["colors"];

const Footer = ({ showingAudio }: Props) => {
  const prime = useColorContext() as ColorKey;
  const lightest = Theme().colors[prime].lightest;

  const linkedinClick = () => {
    window.open("https://www.linkedin.com/in/larrydeguzman/", "_blank");
  };
  const emailClick = () => {
    window.open("mailto:lawrence@deguzman5.com", "_blank");
  };
  const width = useWindowWidth();

  const getPadding = () => {
    if (width < 1023) {
      if (showingAudio) {
        return 225;
      } else {
        return 0;
      }
    }
    if (showingAudio) {
      return 0;
    }
    return 0;
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
        paddingBottom={getPadding()}
      >
        <Text userSelect="none" fontSize={12} color={lightest}>
          © 2025 DEGUZMAN5.com All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
