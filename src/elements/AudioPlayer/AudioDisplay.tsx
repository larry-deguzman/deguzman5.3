import { Box } from "@chakra-ui/react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";
type Props = {
  callback: (who: string) => void;
};

const AudioDisplay = ({ callback }: Props) => {
  const prime = useColorContext() as ColorKey;
  const dark = Theme().colors[prime].darkest;
  const light = Theme().colors[prime].lightest;
  const size = {
    width: 300,
    height: 50,
  };
  const gap = 5;

  return (
    <Box
      onClick={() => {
        callback("audioDisplay");
      }}
      w={size.width}
      h={size.height}
      borderRadius={10}
      bgGradient={`linear(to-br, ${dark}, ${light})`}
    >
      <Box
        position="absolute"
        left={gap}
        top={gap}
        w={size.width - gap * 2}
        h={size.height - gap * 2}
        borderRadius={8}
        bg="#FDFFE9"
      ></Box>
    </Box>
  );
};

export default AudioDisplay;
