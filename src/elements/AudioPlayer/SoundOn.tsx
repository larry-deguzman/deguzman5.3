import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";

import { FaVolumeHigh } from "react-icons/fa6";

type Props = {
  callback: (who: string) => void;
};

const SoundOnButton = ({ callback }: Props) => {
  const id = "soundOnButton";
  const prime = useColorContext() as ColorKey;
  const dark = Theme().colors[prime].darkest;
  const light = Theme().colors[prime].lightest;
  const size = {
    w: 50,
    h: 50,
  };
  const gap = 6;

  const [hovered, setHovered] = useState(false);

  return (
    <Button
      onClick={() => {
        callback(id);
      }}
      id={id}
      p={0}
      bg="transparent"
      _hover={{ bg: "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        w={size.w}
        h={size.h}
        bgGradient={
          hovered
            ? `linear(to-br, ${light}, ${dark})`
            : `linear(to-br, ${dark}, ${light})`
        }
      >
        <Box
          position="absolute"
          left={gap / 2}
          top={gap / 2}
          w={size.w - gap}
          h={size.h - gap}
          bgGradient={
            hovered
              ? `linear(to-br, ${dark}, ${light})`
              : `linear(to-br, ${light}, ${dark})`
          }
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <FaVolumeHigh
            style={{
              fontSize: "24px",
              color: hovered
                ? Theme().colors[prime].lightest
                : Theme().colors[prime].darkest,
            }}
          />
        </Box>
      </Box>
    </Button>
  );
};

export default SoundOnButton;

// <FaBeer style={{ fontSize: '24px', color: 'red' }} />
