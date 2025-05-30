import { Box, Text, HStack, Button, Spacer } from "@chakra-ui/react";
import { FaTrash, FaPlay } from "react-icons/fa6";

import { useColorContext } from "../../context/Color";
import type { ColorKey } from "../../types/GenericTypes";
import Theme from "../../theme/Theme";

type Props = {
  id: string;
  title: string;
  hasPlayed: boolean;
  isPlaying: boolean;
  callbackToRemove: (id: string, isPlaying: boolean) => void;
};

const PlayListItem = ({
  id,
  title,
  callbackToRemove,
  hasPlayed,
  isPlaying,
}: Props) => {
  const prime = useColorContext() as ColorKey;
  const color = isPlaying
    ? "#000"
    : hasPlayed
    ? Theme().colors[prime].light
    : Theme().colors[prime].darkest;

  // console.log("PlayListItem:", title, ": isPlaying", isPlaying);
  function truncate(str: string, maxLength = 35) {
    const strArr = str.split(" ");
    const words = [];
    let total = 0;
    for (let i = 0; i < strArr.length; i++) {
      const len = strArr[i].length;
      const prospectiveTotal = total + len + 1;
      if (prospectiveTotal < maxLength) {
        words.push(strArr[i]);
        total = prospectiveTotal;
      }
    }
    const newString = words.join(" ") + "...";
    return newString;
  }
  return (
    <Box>
      <HStack ml={5} mt={5} mr={5}>
        <Button w={280} justifyContent="flex-start">
          <HStack spacing={2}>
            <Text color={color}>{truncate(title)}</Text>
          </HStack>
        </Button>
        <Spacer />
        <Button
          onClick={() => {
            if (!isPlaying) {
              callbackToRemove(id, isPlaying);
            }
          }}
        >
          {!isPlaying && <FaTrash color={color} />}
          {isPlaying && <FaPlay color={color} />}
        </Button>
      </HStack>
    </Box>
  );
};

export default PlayListItem;
