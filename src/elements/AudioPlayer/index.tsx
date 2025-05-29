import { useState, useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { useColorContext } from "../../context/Color";
import type { ColorKey, PlaylistItem } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";

import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import RewindButton from "./RewindButton";
import FFButton from "./FFButton";
import SoundOnButton from "./SoundOn";
import SoundOffButton from "./SoundOffButton";
import CloseButton from "./CloseButton";
import AudioDisplay from "./AudioDisplay";

type Props = {
  playerCallback: (command: string, song?: PlaylistItem) => void;
  currentSong: PlaylistItem | null;
};

const AudioPlayer = ({ playerCallback, currentSong }: Props) => {
  const prime = useColorContext() as ColorKey;
  const back = Theme().colors[prime].dark;
  const fore = Theme().colors[prime].light;
  const player = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasVolume, setHasVolume] = useState<boolean>(true);

  const [song, setSong] = useState<PlaylistItem | null>(null);

  useEffect(() => {
    if (player.current) {
      player.current.volume = 1;
    }
    setSong(currentSong);
  }, [currentSong]);

  // console.log("AudioPlayer currentSong", song, setSong, currentSong);
  const callback = (who: string) => {
    switch (who) {
      case "playButton":
        setIsPlaying(true);
        player.current?.play();
        break;
      case "pauseButton":
        setIsPlaying(false);
        player.current?.pause();
        break;
      case "rewindButton":
        console.log("Rewind button clicked");
        if (player.current) {
          if (player.current.currentTime < 3) {
            setIsPlaying(false);
            player.current?.pause();
            playerCallback("rewind", song ?? undefined);
          } else {
            player.current.currentTime = 0;
            player.current.play();
            setIsPlaying(true); // optional: start playing from the beginning
          }
        }
        break;
      case "ffButton":
        console.log("Fast forward button clicked");
        setIsPlaying(false);
        player.current?.pause();
        playerCallback("fastForward", song ?? undefined);
        break;
      case "soundOnButton":
        setHasVolume(true);
        if (player.current) {
          player.current.volume = 1;
        }
        break;
      case "soundOffButton":
        setHasVolume(false);
        if (player.current) {
          player.current.volume = 0;
        }
        break;
      case "closeButton":
        playerCallback("close");
        break;
      default:
        console.log("Unknown button clicked");
    }
  };
  const onPlay = () => {
    setIsPlaying(true);
  };
  const onPause = () => {
    setIsPlaying(false);
  };
  const onEnded = () => {
    playerCallback("ended", song ?? undefined);
    setIsPlaying(false);
    setSong(null);
  };

  return (
    <Box
      id="audioPlayer"
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
      <audio
        ref={player}
        src={currentSong?.url ?? undefined}
        autoPlay
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      />
    </Box>
  );
};

export default AudioPlayer;
