import { Box, Image, Text, Button } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";

import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

import type { ColorKey, CardProps, CardData } from "../types/GenericTypes";

import CardGlare from "../images/CardGlare.png";

const Card = ({ data, callback }: CardProps) => {
  const prime = useColorContext() as ColorKey;
  if (!data) {
    return <div>Loading...</div>;
  }
  const { title, picture, description } = data as CardData;
  // const { title, picture, description } = data;
  // console.log("card/data", title, picture, link, description);
  // console.log("card/data", link);

  const backgroundColor = Theme().colors[prime].lightest;

  const setUpCallback = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const toSend = {
      title: title,
      content: description,
      images: Array.isArray(picture) ? picture : [picture],
    };
    callback(toSend);
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
      <Button onClick={setUpCallback}>
        <Image
          src={Array.isArray(picture) ? picture[0] : picture}
          alt={title}
        />
        <Image
          left={0}
          top={0}
          w="100%"
          position="absolute"
          src={CardGlare}
          alt="CardGlare"
        />
      </Button>
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
        Read More
      </Button>
    </Box>
  );
};

export default Card;

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
