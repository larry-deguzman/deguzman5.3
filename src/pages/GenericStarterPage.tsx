import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";
import { useColorContext } from "../context/Color";
import type { UpdatePageProps, ColorKey } from "../types/GenericTypes";

const GenericStarterPage = () => {
  const prime = useColorContext() as ColorKey;
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as UpdatePageProps;
  const { title, content, images } = info;

  console.log("GenericStarterPage", title, content, images);
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
    </>
  );
};

export default GenericStarterPage;
