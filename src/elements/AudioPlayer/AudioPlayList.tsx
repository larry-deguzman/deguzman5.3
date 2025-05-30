import { Box, Button, Slide, Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";
import CloseButton from "./CloseButton";
import { usePlaylist } from "../../hooks/Playlist";
import PlayListItem from "./PlayListItem";
import { FaRegFileLines } from "react-icons/fa6";
import type { PlaylistItem } from "../../types/GenericTypes";

type Props = {
  playlistCallback: (song: PlaylistItem) => void;
};

const AudioPlayList = ({ playlistCallback }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const prime = useColorContext() as ColorKey;
  const back = Theme().colors[prime].dark;
  const fore = Theme().colors[prime].light;
  const {
    playlist,
    // addToPlaylist,
    removeFromPlaylist,
    // clearPlaylist,
    // setPlaylist,
  } = usePlaylist();

  const callbackToRemove = (id: string, isPlaying: boolean) => {
    console.log("Remove item with id:", id);
    if (isPlaying) {
      console.log("Item is currently playing, stopping playback.");
      const foundSong = playlist.find((song) => song.id === id);
      if (foundSong) {
        // Call the playlist callback to handle the song that is being removed
        playlistCallback(foundSong);
      }

      // I have to do something this here. I don't think there's
      // anything I can do until have the audio player set up.
      // For now, I will just log it.
    } else {
      removeFromPlaylist(id);
    }
  };

  const getPlayList = () => {
    const list = [];
    for (let i = 0; i < playlist.length; i++) {
      const { id, title, hasPlayed, isPlaying } = playlist[i];
      list.push(
        <PlayListItem
          id={id}
          key={`playlist-item-${id}`}
          title={title}
          hasPlayed={hasPlayed ?? false}
          isPlaying={isPlaying ?? false}
          callbackToRemove={callbackToRemove}
        />
      );
    }
    return list;
  };
  return (
    <>
      <Box position="fixed" bottom={160} id="playListButton">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {isOpen ? (
            ""
          ) : (
            <Box
              w={135}
              h={30}
              marginBottom={5}
              bgGradient={
                hovered
                  ? `linear(to-br, ${fore}, ${back})`
                  : `linear(to-br, ${back}, ${fore})`
              }
              borderRadius={10}
            >
              <Box
                position="absolute"
                w={131}
                h={26}
                left={2}
                top={2}
                bgGradient={
                  hovered
                    ? `linear(to-br, ${back}, ${fore})`
                    : `linear(to-br, ${fore}, ${back})`
                }
                borderRadius={9}
              >
                <HStack ml={5} left={hovered ? 2 : 0} top={hovered ? 2 : 0}>
                  <FaRegFileLines color="#000" />
                  <Text color="#000" ml={-5}>
                    Show Playlist
                  </Text>
                </HStack>
              </Box>
            </Box>
          )}
        </Button>
      </Box>

      <Box position="relative" w="100%">
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 1001 }}>
          <Flex
            w="100vw"
            h="100vh"
            align="center" // vertical centering
            justify="center"
            bg="rgba(0, 0, 0, .5)"
          >
            <Box
              position="absolute"
              w="100vw"
              h="100vh"
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(false);
              }}
            ></Box>
            <Box
              left={0}
              w={325}
              h={500}
              bgGradient={`linear(to-br, ${fore}, ${back})`}
              id="audioPlayList"
              borderRadius={10}
              boxShadow="0 -4px 24px rgba(0,0,0,0.2)"
              mx="auto"
              position="relative"
            >
              <Box
                bgGradient={`linear(to-br, ${back}, ${fore})`}
                w={315}
                h={462}
                borderRadius={10}
                mx="auto"
                bottom={5}
                left={5}
                position="absolute"
              >
                <Box
                  bg="#FDFFE9"
                  w={305}
                  h={452}
                  borderRadius={9}
                  mx="auto"
                  bottom={5}
                  left={5}
                  position="absolute"
                  overflow="auto"
                  sx={{
                    /* For Webkit browsers (Chrome, Safari, Edge) */
                    "&::-webkit-scrollbar": {
                      width: "8px",
                      background: Theme().gray.one,
                      borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: Theme().gray.fifty,
                      borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: Theme().gray.ten,
                    },
                    /* For Firefox */
                    scrollbarColor: "#B0B0B0 #E0E0E0",
                    scrollbarWidth: "thin",
                  }}
                >
                  {/* Page contents goes here */}
                  {getPlayList()}
                </Box>
              </Box>
              <Box position="absolute" top={2} right={2}>
                <CloseButton
                  callback={() => {
                    setIsOpen(false);
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Slide>
      </Box>
    </>
  );
};

export default AudioPlayList;
