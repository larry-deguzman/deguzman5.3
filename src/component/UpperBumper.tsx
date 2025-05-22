import { Box } from "@chakra-ui/react";
import Logomark from "../graphics/Logomark";

const UpperBumper = () => {
  return (
    <Box
      id="UpperBumper"
      ml={2}
      w={[100, 130, 160, 200, 300, 350, 400]}
      height={"header.height"}
    >
      <Logomark headerHeight={{ height: "header.height" }} isSpecial={true} />
    </Box>
  );
};

export default UpperBumper;
