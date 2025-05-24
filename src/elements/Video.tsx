import { Box, Image, Text, Button } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";

import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

import type {
  ColorKey,
  VideoProps,
  Videos,
  VideoData,
} from "../types/GenericTypes";

import CardGlare from "../images/CardGlare.png";

const Video = ({ data, callback }: VideoProps) => {
  const prime = useColorContext() as ColorKey;
  if (!data) {
    return <div>Loading...</div>;
  }
  const { title, key, description } = data as Videos;
  // thumbnail: "https://www.youtube.com/watch?v=VIDEO_ID",
  // video: "https://www.youtube.com/watch?v=VIDEO_ID",
  // kErTNHa97xY
  // https://img.youtube.com/vi/kErTNHa97xY/mqdefault.jpg

  const thumbnail = `https://img.youtube.com/vi/${key}/mqdefault.jpg`;
  const actualVideo = `https://www.youtube.com/watch?v=${key}`;
  const backgroundColor = Theme().colors[prime].lightest;
  const setUpCallback = () => {
    const pack: VideoData = {
      thumbnail,
      actualVideo,
      title,
    };
    callback(pack);
  };

  return (
    <Box
      id="Card"
      w="319px"
      mt={10}
      ml={10}
      mr={10}
      borderRadius={10}
      bg={backgroundColor}
      overflow="hidden"
      position="relative"
    >
      <Image src={thumbnail} alt={title} />
      <Image
        left={0}
        top={0}
        w="100%"
        position="absolute"
        src={CardGlare}
        alt="CardGlare"
      />
      <Text p={10} fontSize={20} fontWeight="bold" color={`${prime}.darkest`}>
        {title}
      </Text>
      <Text p={10} fontSize={12} color={`${prime}.darkest`}>
        {description}
      </Text>
      <Button
        onClick={setUpCallback}
        p={8}
        ml={10}
        mb={8}
        fontWeight="bold"
        color={`${prime}.lightest`}
        bg={`${prime}.darkest`}
        borderRadius={8}
        _hover={{
          bg: `${prime}.light`,
          color: `${prime}.black`,
        }}
      >
        Watch This Video
      </Button>
    </Box>
  );
};

export default Video;

// as={RouterLink}
// to={link}
// This is how you should use the button element to navigat to a different page:
/*
import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

<Button as={RouterLink} to="/about">
  Go to About
</Button>
*/
//  Then you need to go to the App.tsx page and add the route to the afformentioned page.
