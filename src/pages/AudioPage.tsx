// import { useEffect } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
// this is called remix icons
import { useColorContext } from "../context/Color";
import type {
  UpdatePageProps,
  ColorKey,
  AudioData,
} from "../types/GenericTypes";

import AudioHolder from "../component/AudioHolder";

import "../css/Universal.css";

type Props = {
  callback: (data: AudioData) => void;
};

const AudioPage = ({ callback }: Props) => {
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  // console.log("AudioPage", location);
  const { title, music } = info;

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
        <Text className="title-text" color={`${prime}.lightest`}>
          {title}
        </Text>
      </Box>
      <Box position="relative" id="audioHolder" top={74}>
        <AudioHolder data={music ?? []} callback={setCallback} />
      </Box>
    </>
  );
};

export default AudioPage;
