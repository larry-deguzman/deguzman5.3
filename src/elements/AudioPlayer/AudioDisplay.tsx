import { Box, Text } from "@chakra-ui/react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";

import { usePlaylist } from "../../hooks/Playlist";

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

  const {
    playlist,
    // addToPlaylist,
    // removeFromPlaylist,
    // clearPlaylist,
    // setPlaylist,
  } = usePlaylist();

  const getSong = () => {
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].isPlaying) {
        return playlist[i].title;
        break;
      }
    }
  };
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
        overflow="hidden"
      >
        <Text ml={8} marginTop={7} color="black" fontSize="md">
          {getSong()}
        </Text>
      </Box>
    </Box>
  );
};

export default AudioDisplay;
