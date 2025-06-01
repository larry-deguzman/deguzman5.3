import { Flex, Text, Box, IconButton, Stack, Image } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

import { useColorContext } from "../context/Color";

import type { ColorKey, UpdatePageProps } from "../types/GenericTypes";

const MyTechJourney = () => {
  const prime = useColorContext() as ColorKey;
  const navigate = useNavigate();
  const location = useLocation();

  const info = location.state as UpdatePageProps;
  const { title } = info;
  return (
    <>
      <Flex
        mb={20}
        align="center"
        position="fixed"
        bg={`${prime}.darkest`}
        zIndex={500}
        w="100%"
      >
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
      <Box
        position="fixed"
        bg={`${prime}.darkest`}
        zIndex={500}
        top={[61, 67, 74, 82, 103, 114, 124]}
        w="100%"
        p={4}
      >
        <Text className="title-text" color={`${prime}.lightest`}>
          {title}
        </Text>
      </Box>
      <Box ml={20} mr={20} mt={5} paddingTop={100}>
        <Stack spacing={20}>
          <Flex align="center" justify="space-between">
            <Box flex="1">
              <Image
                src="/images/myTechJourney/flashkit.jpg"
                alt="Flashkit"
                width={[100, 100, 319]}
                height="auto"
                float="right"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              My tech journey began around 2002, when I started building
              websites for the music groups I managed. I also built websites for
              my own companies. Initially, I taught myself Flash, working
              through tutorials until I discovered Flashkit.com, a site that
              proved invaluable. It literally had everything that I could ever
              need to build well rounded websites.
              <br />
              <br />
              Over the next several years I continued to work on my internet
              skills. I would pick up new and exciting techniques. I think at
              the time there weren’t too many sites around that would help out a
              developer who was just starting out. I spent a ton of time in the
              library as well as Barnes and Noble. I read everything I could get
              my hands on to figure out this whole web thing.
            </Box>
          </Flex>

          <Flex align="center" justify="space-between">
            <Box flex="1">
              Over the next several years I continued to work on my internet
              skills. I would pick up new and exciting techniques. I think at
              the time there weren’t too many sites around that would help out a
              developer who was just starting out. I spent a ton of time in the
              library as well as Barnes and Noble. I read everything I could get
              my hands on to figure out this whole web thing.
              <br />
              <br />
              <Image
                src="/images/myTechJourney/actionscript.jpg"
                alt="Flashkit"
                width={[100, 100, 243]}
                height="auto"
                float="left"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              I don’t think I would have really gotten into web development if I
              didn’t need websites. I mean I needed websites for my companies as
              well as my artists. I would chat with web developers, but the
              price for a 1 to 2 page site was crazy talk. We’re talking tens of
              thousands of dollars for what? 2 pages of stuff? So I guess in
              order to save money, I took on the responsibility to learn and
              grow.
              <br />
              <br />I first started with HTML and eventually CSS in order to
              style that HTML. I then started getting into some javascript. I
              need the sites to do certain things like open a pop-up or redirect
              to another page. I then discovered Flash. Man was that an eye
              opener. I realized that I could do almost everything I needed to
              do on a website in Flash. I really dug into Flash. I read the
              essential flash book like it was a science fiction novel.
              <br />
              <br />
              I was able to create really technically savvy websites for my
              company as well as some of the acts in my purview. This went on
              for a few years and I found that I actually liked the technical
              work much better than the music industry work.
              <br />
              <br />
              Eventually it all paid off. I ended up getting a job at Yahoo! in
              2009. That is another story that continues in the Yahoo! section
              of the site.
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default MyTechJourney;
