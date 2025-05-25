import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";

import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import RewindButton from "./RewindButton";
import FFButton from "./FFButton";
import SoundOnButton from "./SoundOn";
import SoundOffButton from "./SoundOffButton";
import CloseButton from "./CloseButton";
import AudioDisplay from "./AudioDisplay";

const AudioPlayer = () => {
  const prime = useColorContext() as ColorKey;
  const back = Theme().colors[prime].dark;
  const fore = Theme().colors[prime].light;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasVolume, setHasVolume] = useState<boolean>(true);

  const callback = (who: string) => {
    switch (who) {
      case "playButton":
        setIsPlaying(true);
        break;
      case "pauseButton":
        setIsPlaying(false);
        break;
      case "rewindButton":
        console.log("Rewind button clicked");
        break;
      case "ffButton":
        console.log("Fast forward button clicked");
        break;
      case "soundOnButton":
        setHasVolume(true);
        break;
      case "soundOffButton":
        setHasVolume(false);
        break;
      case "closeButton":
        break;
      default:
        console.log("Unknown button clicked");
    }
  };
  return (
    <Box
      position="fixed"
      bottom={0}
      w="325px"
      h="150px"
      bgGradient={`linear(to-br, ${fore}, ${back})`}
      borderRadius={10}
      zIndex={1000}
      marginBottom={10}
    >
      <Box top={2} right={2} position="absolute">
        <CloseButton callback={callback} />
      </Box>
      <Box id="displayBox" left={10} top={30} position="relative">
        <AudioDisplay callback={callback} />
      </Box>
      <HStack
        position="absolute"
        bottom={10}
        left="50%"
        transform="translateX(-50%)"
      >
        {isPlaying ? (
          <PauseButton callback={callback} />
        ) : (
          <PlayButton callback={callback} />
        )}
        <RewindButton callback={callback} />
        <FFButton callback={callback} />
        {hasVolume ? (
          <SoundOffButton callback={callback} />
        ) : (
          <SoundOnButton callback={callback} />
        )}
      </HStack>
    </Box>
  );
};

export default AudioPlayer;
