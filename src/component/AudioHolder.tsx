import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Audio from "../elements/Audio";

import type { AudioHolderProps } from "../types/GenericTypes";

const AudioHolder = ({ data, callback }: AudioHolderProps) => {
  const getSongs = () => {
    const songsArray = [];
    if (!data) {
      return null;
    } else {
      const songs = Array.isArray(data) ? data : [];
      for (let i = 0; i < songs.length; i++) {
        songs[i].id = i.toString();
        songsArray.push(
          <Audio key={`song${i}`} data={songs[i]} callback={callback} />
        );
      }
      return songsArray;
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
    <Box margin="auto" w="fit-content" p={0} mt={10} mb={130}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {getSongs()}
      </Masonry>
    </Box>
  );
};

export default AudioHolder;
