import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import Audio from "../elements/Audio";
import { useColorContext } from "../context/Color";
import type {
  AudioHolderProps,
  Audio as AudioType,
  ColorKey,
} from "../types/GenericTypes";

const AudioFolderHolder = ({ data, callback }: AudioHolderProps) => {
  const prime = useColorContext() as ColorKey;
  const getSongs = (musicData: AudioType[]) => {
    if (!musicData || musicData.length === 0) return null;
    return musicData.map((song, i) => (
      <Audio
        key={`song${i}`}
        data={{ ...song, id: i.toString() }}
        callback={callback}
      />
    ));
  };

  const fixTitle = (folder: string) => {
    if (!isNaN(Number(folder))) {
      folder += "s";
    }
    return folder.charAt(0).toUpperCase() + folder.slice(1);
  };

  if (typeof data !== "object" || Array.isArray(data)) return null;

  return (
    <Accordion allowMultiple defaultIndex={[0]} w="100%" mt={10} mb={130}>
      {Object.keys(data).map((folder) => (
        <AccordionItem key={folder}>
          <h2>
            <AccordionButton>
              <Box w="100%">
                <HStack w="100%">
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {fixTitle(folder)}{" "}
                  </Box>
                  <Box
                    width="100%"
                    height={1}
                    bg={`${prime}.lightest`}
                    mx={2}
                    borderRadius="full"
                  />
                  <AccordionIcon />
                </HStack>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Masonry
              breakpointCols={{
                default: 4,
                1436: 2,
                1024: 2,
                900: 2,
                700: 1,
                550: 1,
                420: 1,
                360: 1,
              }}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {getSongs((data as { [folder: string]: AudioType[] })[folder])}
            </Masonry>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AudioFolderHolder;
