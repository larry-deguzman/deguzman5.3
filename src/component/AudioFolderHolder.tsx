import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Audio from "../elements/Audio";

import type {
  AudioHolderProps,
  Audio as AudioType,
} from "../types/GenericTypes";

const AudioFolderHolder = ({ data, callback }: AudioHolderProps) => {
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
  const getFolders = () => {
    const foldersArray = [];
    if (typeof data === "object" && !Array.isArray(data)) {
      for (const folder in data) {
        foldersArray.push(
          <Masonry
            key={`folder-${folder}`}
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {getSongs((data as { [folder: string]: AudioType[] })[folder])}
          </Masonry>
        );
      }
    }
    return foldersArray;
  };
  const getSongs = (musicData: AudioType[]) => {
    const songsArray = [];
    if (!musicData || musicData.length === 0) {
      return null;
    } else {
      const songs = musicData;
      for (let i = 0; i < songs.length; i++) {
        songs[i].id = i.toString();
        songsArray.push(
          <Audio key={`song${i}`} data={songs[i]} callback={callback} />
        );
      }
      return songsArray;
    }
  };

  return (
    <Box margin="auto" w="fit-content" p={0} mt={10}>
      {getFolders()}
    </Box>
  );
};

export default AudioFolderHolder;
