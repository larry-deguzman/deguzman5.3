// import { useEffect } from "react";
import { useState } from "react";
import { Box, Flex, IconButton, Text, HStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
import { MdOutlineWidthNormal } from "react-icons/md";
import { FaShuffle, FaFolderOpen } from "react-icons/fa6";

// this is called remix icons
import { useColorContext } from "../context/Color";
import type {
  UpdatePageProps,
  ColorKey,
  AudioData,
  Audio,
} from "../types/GenericTypes";

import AudioHolder from "../component/AudioHolder";
import { sortPlaylistByFolder, shuffleArray } from "../utils/Utilities";

import "../css/Universal.css";
import AudioFolderHolder from "../component/AudioFolderHolder";
import { usePlaylist } from "../hooks/Playlist";

type Props = {
  callback: (data: AudioData) => void;
};

const AudioPage = ({ callback }: Props) => {
  // console.log(callback);
  const TYPE = {
    NORMAL: "normal",
    SHUFFLE: "shuffle",
    BY_FOLDER: "byFolder",
  };
  const [sortType, setSortType] = useState<string>(TYPE.NORMAL);

  const { playlist } = usePlaylist();
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  // console.log("AudioPage", location);
  const { title, music } = info;
  const sortedMusic: { [folder: string]: Audio[] } | Audio[] = (() => {
    switch (sortType) {
      case TYPE.BY_FOLDER:
        // TODO: implement sorting by folder
        return sortPlaylistByFolder(music ?? []);
      case TYPE.SHUFFLE:
        // TODO: implement shuffling
        return shuffleArray(music ?? []);
      default:
        // TODO: implement default sorting
        return music ?? [];
    }
  })();

  const setCallback = (data: AudioData) => {
    callback(data);
  };

  return (
    <>
      <Flex
        mb={20}
        align="center"
        position="fixed"
        bg={`${prime}.darkest`}
        zIndex={500}
        w="100%"
      >
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
          aria-label="Back"
          icon={<RiArrowLeftLine size={40} />}
          size="lg"
          color={`${prime}.lightest`}
        />
        <Text fontSize="xl" fontWeight="bold" color={`${prime}.lightest`}>
          Back to Main
        </Text>
      </Flex>
      <Box
        position="fixed"
        bg={`${prime}.darkest`}
        zIndex={500}
        top={[61, 67, 74, 82, 103, 114, 124]}
        w="100%"
        p={4}
      >
        <HStack spacing={4}>
          <Text className="title-text" color={`${prime}.lightest`}>
            {title}
          </Text>
          {sortType !== "normal" && (
            <>
              <Button
                ml={10}
                mr={10}
                onClick={() => {
                  setSortType(TYPE.NORMAL);
                }}
              >
                <MdOutlineWidthNormal />
                &nbsp;Normal
              </Button>
              {(sortType !== TYPE.SHUFFLE || sortType !== TYPE.BY_FOLDER) && (
                <Text> • </Text>
              )}
            </>
          )}
          {sortType !== "shuffle" && (
            <>
              <Button
                ml={10}
                mr={10}
                onClick={() => {
                  setSortType(TYPE.SHUFFLE);
                }}
              >
                <FaShuffle />
                &nbsp; Shuffle
              </Button>
              {sortType !== TYPE.BY_FOLDER && <Text> • </Text>}
            </>
          )}
          {sortType !== "byFolder" && (
            <Button
              ml={10}
              onClick={() => {
                setSortType(TYPE.BY_FOLDER);
              }}
            >
              <FaFolderOpen />
              &nbsp; Age/Type
            </Button>
          )}
        </HStack>
      </Box>
      <Box
        position="relative"
        id="audioHolder"
        top={[120, 74, 74, 74, 74, 74, 74]}
      >
        {(sortType === "normal" || sortType === "shuffle") &&
          Array.isArray(sortedMusic) && (
            <AudioHolder data={sortedMusic ?? []} callback={setCallback} />
          )}
        {sortType === "byFolder" && (
          <AudioFolderHolder data={sortedMusic} callback={setCallback} />
        )}
      </Box>
      {playlist.length > 0 && <Box width="100%" paddingBottom={100}></Box>}
    </>
  );
};
// w={[325, 416, 546, 694, 894, 1020, 1428]}

export default AudioPage;
