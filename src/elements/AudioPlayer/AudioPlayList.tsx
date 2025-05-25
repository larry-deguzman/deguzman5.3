import { Box, Button, Slide, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";
import CloseButton from "./CloseButton";

const AudioPlayList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prime = useColorContext() as ColorKey;
  const back = Theme().colors[prime].dark;
  const fore = Theme().colors[prime].light;

  return (
    <Box position="relative" w="100%">
      <Button
        position="absolute"
        bottom={160}
        left={10}
        zIndex={200}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Playlist" : "Show Playlist"}
      </Button>
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
              ></Box>
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
  );
};

export default AudioPlayList;
