import { useRef } from "react";
import { Box, Image, Text, Button, HStack, Spacer } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
// import { PiSpeakerSimpleLowBold } from "react-icons/pi";
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

const AudioElement = ({ data, callback }: AudioProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prime = useColorContext() as ColorKey;
  if (!data) {
    return <div>Loading...</div>;
  }
  const { title, url, description, image, id } = data as Audio;
  const backgroundColor = Theme().colors[prime].lightest;

  const setUpCallback = (add: boolean) => {
    const pack: AudioData = {
      description,
      url,
      title,
      image: image ? image : undefined,
      id,
      add,
    };
    callback(pack);
    if (ref.current) {
      ref.current.style.display = "none";
    }
  };

  const getFolder = () => {
    const arr = data.url.split("/");
    let folder = arr[arr.length - 2];
    if (!isNaN(Number(folder))) {
      folder += "s";
    }
    return folder.charAt(0).toUpperCase() + folder.slice(1);
  };

  return (
    <Box
      ref={ref}
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

      <HStack spacing={2} align="center">
        <Text p={10} fontSize={20} fontWeight="bold" color={`${prime}.darkest`}>
          {title}
        </Text>
        <Text
          as="span"
          fontWeight="bold"
          fontSize={14}
          color={`${prime}.darkest`}
        >
          {getFolder()}
        </Text>
      </HStack>
      <Text p={10} fontSize={12} color={`${prime}.darkest`}>
        {description}
      </Text>
      <HStack spacing={2}>
        <Box>
          {/*}
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
          */}
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

export default AudioElement;
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
