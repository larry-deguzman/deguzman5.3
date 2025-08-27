import { Flex, Text, Box, IconButton, Stack, Image } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

import { useColorContext } from "../context/Color";

import type { ColorKey, UpdatePageProps } from "../types/GenericTypes";

const Yahoo = () => {
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
              My time at Yahoo! started back in 2009. Initially I didn’t apply
              for the job. I reached out to my friend who I knew did Flash. He
              really did Flash at a high level. You can see what he’s up to
              nowadays. (https://www.zaldydingle.com/) I was reaching out to him
              to help me understand if I was good or not. Honestly I didn’t know
              if my programming skills were up to par. I sent him some games
              that I made and a couple websites. He reviewed them and asked if I
              wanted to come into his office. I said sure. Hahaha, I didn’t even
              know what office or company he was at. He then said, “It’s a
              little place that I might not have heard of, ‘Yahoo!’”.
              <br />
              <br />I ended up coming in that week and he and I sat down and
              chatted about some of the work that I sent him. He schooled the
              hell out of my coding. Apparently, my coding was good but weird.
              He gave me pointers on how to create loops and how to do things
              way more efficiently. I was floored. After a couple hours, he
              brought me out to the rest of the team. All of them were all very
              nice and pleasant. He then said he had to go back to work and that
              he would walk me out to my car.
            </Box>
          </Flex>

          <Flex align="center" justify="space-between">
            <Box flex="1">
              At the car, he said that my coding is decent and he would love for
              me to work for him. I initially said no. I didn’t really want the
              pressure of having to execute something that I still did not feel
              sure of. He then said, “If you don’t cut it, I can just let you go
              in three months”. I said sure, that sounds good. So I started at
              Yahoo! in August of 2009 as a contractor. The cool thing to me was
              that if he wanted to let me go, all he had to do was nothing. I
              would just be let go when my contract ended. That seemed like a
              great deal.
              <br />
              <br />
              I ended up going permanent in July of 2010. It was actually pretty
              funny. After the first three months, I was saying goodbye to all
              of my new friends at Yahoo! Then Zaldy said, “Oh, I extended your
              contract.” Hahaha, I was like “Cool”. I ended up staying until
              July of 2010 wherein I became a permanent Yahoo!
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
              The first few years were tough. I was playing catch up with the
              rest of the developers as well as trying to navigate the corporate
              environment. Honestly I made a ton of mistakes and overstepped
              quite a bit. It took about 2-3 years to really get my corporate
              legs under me. I mean I was doing the job and doing it well. By
              the end of year one, I was doing about 60-70% of all the ads on
              the Yahoo! Frontpage. I was working hard and learning as I went.
              Within the first year I had caught up to the rest of my team. By
              year two or three, I had surpassed my team. Now I know this sounds
              wild, like I’m tooting my own horn. I really am not, the work just
              made sense to me and I took to it like a fish to water.
              <br />
              <br />
              <Image
                src="/images/yahoo/bmw.jpg"
                alt="bmw"
                width={[100, 100, 319]}
                height="auto"
                float="right"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              I started out as a Visual Designer and moved my way up in April
              2011 to Interactive Developer. I’m not sure what the difference in
              job responsibilities are. I think I was already functioning at the
              Interactive Developer position when they promoted me. Either way
              it was more of the same with a bit more freedom to do as I
              pleased. I think this was the period wherein I started getting
              patents. You can read about the patents in the patents section of
              this site. It’s pretty boring reading, but it is interesting.
              <br />
              <br />
              In September 2015 I was promoted to Senior Interactive Developer.
              This gave me a bit more freedom to execute my job. At this point I
              was mostly working with teams outside of my immediate team. I
              would say about half of my time was spent outside of my
              organization. It was an interesting journey to see how other teams
              functioned. Apparently, the team I was one was a very very
              responsible team. I don’t think I ever remember someone not making
              a deadline or being late. I can remember maybe 5-10 mistakes that
              got published, but in the 14-15 years I was there that’s not
              really anything at all. I made 1 mistake while I was there, but
              fortunately the Campaign Manager that I was working with was able
              to get the one statistic that I was missing with math. Honestly it
              was all legit, he just had to do some math.
              <br />
              <br />
              Rather quickly in August of 2016 I was promoted to Principal
              Interactive Developer. This was my final role. I stayed in this
              role until I was laid off. I stayed in this role for 7 years. By
              this time, my job had changed many times. My responsibilities
              really changed. I was in charge of the middle framework that our
              display ads ran on. Internally there is a server side set of
              scripts that communicates with the code that me and my team built.
              The code in turn that I built then communicates with the Ad code
              on the page. This allows the Ad code to function in an environment
              wherein they don’t have to care about the browser or the device.
              <br />
              <br />
              This job was tough. Whenever we published code, it ran through a
              Jenkins box. We then had to manually test some of the features in
              Sauce Labs. Interestingly that’s about 70-80 test environments per
              feature. That’s actually a ton of work. Heaven forbid if something
              is broken. This was a global framework so Europe, The Middle East,
              Asia, South America, North America and Australia relied on what
              our team produced.
              <br />
              <br />
              All in all It was a great experience. I saw the end coming when
              Yahoo! decided to use Google’s Ad Delivery system. I think I could
              have stayed if I got on board with the transition, but I think at
              this point I was done. 7 years is a long time doing the same
              thing. I don’t think I was very excited about another transition.
              By this point I had gone through ActionScript 2 -&gt; ActionScript
              3 -&gt; HTML5/CSS3 -&gt; JavaScript -&gt; ES6. I think about my
              time at Yahoo! and it was really a very good experience. When I
              got the letter that I was getting laid off, I was pretty relieved.
              I saw the writing on the wall. At the level I was at, you hear
              things and understand things that prior you wouldn’t have really
              gotten.
              <br />
              <br />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Yahoo;
//https://www.commarts.com/project/15351/bmw-north-america
