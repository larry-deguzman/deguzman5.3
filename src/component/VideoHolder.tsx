import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Video from "../elements/Video";

import type { VideoHolderProps, VideoData } from "../types/GenericTypes";

const VideoHolder = ({ data, callback }: VideoHolderProps) => {
  // console.log("VideoHolder", data, callback);

  const setUpCallback = (videoData: VideoData) => {
    // console.log("VideoHolder/callback", videoData);
    callback(videoData);
  };
  // Remove setUpCallback and use the callback prop directly if it matches the required type

  const getVideos = () => {
    const videoArray = [];
    if (!data) {
      return null;
    } else {
      const video = data;
      for (let i = 0; i < video.length; i++) {
        videoArray.push(
          <Video key={`video${i}`} data={video[i]} callback={setUpCallback} />
        );
      }
      return videoArray;
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1436: 2,
    1024: 2,
    900: 2,
    700: 1,
    550: 1,
    420: 1,
    360: 1,
  };
  return (
    <Box margin="auto" w="fit-content" p={0} mt={10}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {getVideos()}
      </Masonry>
    </Box>
  );
};

export default VideoHolder;
