import { Box, Image } from "@chakra-ui/react";

import MainImage from "../images/deguzman5.3_main.jpg";

const MainPicture = () => {
  return (
    <Box>
      <Image src={MainImage} alt="MainImage" objectFit="none" />
    </Box>
  );
};

export default MainPicture;
