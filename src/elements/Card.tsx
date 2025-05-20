import { Box } from "@chakra-ui/react";
import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

type Props = {
  width: number | string;
  height: number | string;
};
const Card = ({ width, height }: Props) => {
  type ColorKey = keyof ReturnType<typeof Theme>["colors"];
  const prime = useColorContext() as ColorKey;
  const backgroundColor = Theme().colors[prime].lightest;
  return (
    <Box
      id="Card"
      w={width}
      h={height}
      mt={10}
      ml={10}
      mr={10}
      borderRadius={10}
      bg={backgroundColor}
    ></Box>
  );
};

export default Card;
