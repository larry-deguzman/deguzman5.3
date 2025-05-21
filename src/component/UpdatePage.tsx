import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
import { useColorContext } from "../context/Color";
import type { UpdatePageProps, ColorKey } from "../types/GenericTypes";

const UpdatePage = () => {
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  const { title, content, images } = info;
  let contentCopy = content;
  // console.log("UpdatePage", title, content, images);
  for (let i = 0; i < images.length; i++) {
    contentCopy = contentCopy.replace(
      /{image}/,
      `<Image src="${images[i]}" alt="image${i}" />`
    );
  }
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
        <Text>{title}</Text>
      </Box>
      <Box>
        <Text>{contentCopy}</Text>
      </Box>
    </>
  );
};

export default UpdatePage;
