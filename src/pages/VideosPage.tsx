import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
import { useColorContext } from "../context/Color";
import type {
  UpdatePageProps,
  ColorKey,
  VideoData,
} from "../types/GenericTypes";

import VideoHolder from "../component/VideoHolder";

import "../css/Universal.css";

const VideosPage = () => {
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  const { title, content, images, videos } = info;

  console.log("Videos", title, content, images);

  const callbackForHolder = (pack: VideoData) => {
    console.log("!!!VideosPage/callbackForHolder", pack);
  };
  return (
    <>
      <Flex mb={20} align="center">
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
      <Box>
        <Text className="title-text">{title}</Text>
      </Box>
      {/* You Tube Video goes here*/}
      <Box>
        <VideoHolder data={videos ?? []} callback={callbackForHolder} />
      </Box>
    </>
  );
};

export default VideosPage;
