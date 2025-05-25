import { Box, Image, Text, Button, HStack, Spacer } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
import { PiSpeakerSimpleLowBold } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";

import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

import type {
  ColorKey,
  AudioProps,
  Audio,
  AudioData,
} from "../types/GenericTypes";

import CardGlare from "../images/CardGlare.png";

const Video = ({ data, callback }: AudioProps) => {
  const prime = useColorContext() as ColorKey;
  if (!data) {
    return <div>Loading...</div>;
  }
  const { title, url, description, image } = data as Audio;
  const backgroundColor = Theme().colors[prime].lightest;

  const setUpCallback = (add: boolean) => {
    const pack: AudioData = {
      description,
      url,
      title,
      image: image ? image : undefined,
      add,
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
      {image && <Image src={image} alt={title} />}
      {image && (
        <Image
          left={0}
          top={0}
          w="100%"
          position="absolute"
          src={CardGlare}
          alt="CardGlare"
        />
      )}
      <Text p={10} fontSize={20} fontWeight="bold" color={`${prime}.darkest`}>
        {title}
      </Text>
      <Text p={10} fontSize={12} color={`${prime}.darkest`}>
        {description}
      </Text>
      <HStack spacing={2}>
        <Box>
          <Button
            onClick={() => {
              setUpCallback(false);
            }}
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
            <HStack spacing={2} align="center">
              <PiSpeakerSimpleLowBold />
              <Text>Listen</Text>
            </HStack>
          </Button>
        </Box>
        <Spacer />
        <Button
          onClick={() => {
            setUpCallback(true);
          }}
          p={8}
          mr={10}
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
          <HStack spacing={2} align="center">
            <TiPlus />
            <Text>Add To Playlist</Text>
          </HStack>
        </Button>
      </HStack>
    </Box>
  );
};

export default Video;
// /images/music/breadIf.jpg
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
