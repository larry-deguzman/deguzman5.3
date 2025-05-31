import { Box, Flex, Image, Link, AspectRatio } from "@chakra-ui/react";

type SideScrollingImagePaneProps = {
  prepend: string;
  images: { src: string; alt: string }[];
};
import type { ColorKey } from "../types/GenericTypes";
import { useColorContext } from "../context/Color";

export default function SideScrollingImagePane({
  prepend,
  images,
}: SideScrollingImagePaneProps) {
  const prime = useColorContext() as ColorKey;
  return (
    <Box display="flex" justifyContent="center" width="80%" m="auto">
      <Box
        overflowX="auto"
        whiteSpace="nowrap"
        p={4} // adjust as needed
        pb={15}
        maxWidth="800px" // adjust as needed
        width="100%"
        borderRadius="md"
        borderWidth="none"
        borderColor="gray.200"
        position="relative"
        bg={`${prime}.darkest`}
      >
        <Flex gap={6}>
          {images.map((img, idx) => (
            <Link href={prepend + img.src} isExternal key={idx}>
              <AspectRatio
                ratio={16 / 9} // Or use 4/3, 1, or your preferred default
                maxW="200px"
                minW="120px"
                w="150px"
              >
                <Image
                  src={prepend + img.src}
                  alt={img.alt}
                  boxSize="150px"
                  objectFit="cover"
                  borderRadius="md"
                  shadow="md"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="transform 0.2s"
                />
              </AspectRatio>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
