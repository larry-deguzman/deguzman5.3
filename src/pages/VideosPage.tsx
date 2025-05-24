import { useState } from "react";

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
import ReactPlayer from "react-player/youtube";
// https://www.npmjs.com/package/react-player
import { useColorContext } from "../context/Color";
import type {
  UpdatePageProps,
  ColorKey,
  VideoData,
} from "../types/GenericTypes";

import VideoHolder from "../component/VideoHolder";

import "../css/Universal.css";

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  const { title, videos } = info;

  // console.log("Videos", title, content, images);

  const callbackForHolder = (pack: VideoData) => {
    // console.log("!!!VideosPage/callbackForHolder", pack);
    setSelectedVideo(pack);
    window.scrollTo(0, 0);
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
        <Text className="title-text" color={`${prime}.lightest`}>
          {title}
        </Text>
      </Box>
      {selectedVideo && (
        <Box
          sx={{
            position: "relative",
            paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          <ReactPlayer
            url={selectedVideo.actualVideo}
            className="react-player"
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            autoPlay
          />
        </Box>
      )}
      <Box>
        <VideoHolder data={videos ?? []} callback={callbackForHolder} />
      </Box>
    </>
  );
};

export default VideosPage;
/*
You can customize ReactPlayer with props like:

controls (true/false)

playing (autoplay)

loop

volume

width, height, etc.
*/
