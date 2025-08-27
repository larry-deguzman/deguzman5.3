import { Flex, Text, Box, IconButton, Stack, Image } from "@chakra-ui/react";
// Image
import { RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

import { useColorContext } from "../context/Color";

import type { ColorKey, UpdatePageProps } from "../types/GenericTypes";

const Apex = () => {
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
              Back in the day, around 1992 my good friend AC asked me if I
              wanted to sing with him. Well I should actually back up a little
              bit.
              <br />
              <br />
              In 1989, my grandparents had their 50th wedding anniversary. As 4
              of 16 of the grandchildren, I was expected to perform a number.
              That is, I was charged to sing a song for my grandparents. I sang
              a song with my cousin. We sang After All by Peter Cetera and Cher.
              Uhhh, it didn’t go over all that well. It was both too high for me
              and if I sang it down an octave it was low for me. So they decided
              to speed up the song and I sang it down an octave. The unfortunate
              thing was that my cousin sounded a bit like a chipmunk. Haha, well
              those were some funny times.
              <br />
              <br />
              <Image
                src="/images/apex/apex_001.jpg"
                alt="Apex 001"
                width={[100, 100, 319]}
                height="auto"
                float="left"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              Fast forward to 1991 and I was out with my friends. We were all
              just starting to drive and we were going out all the time. I mean
              wow, we really went out all the time. It was a different time and
              I guess parents didn’t really worry about their kids. One of my
              good friends Orlando drove a big van, so we would all just pile in
              and drive all around the Bay Area all night. During those jaunts
              into the unknown we would put on the radio and everyone would
              sing. The funny thing is that I thought that everyone could sing.
              Everyone in my family could sing so in my very narrow world, I
              thought that everyone could just sing. Man was I wrong. I actually
              realized that not many people can actually sing. It was such a
              wild epiphany and it struck me as one of the most crazy things
              that I learned. Who would have thought that people couldn’t sing?
              In any case there were a few of us that could sing and it was
              pretty apparent who could and who couldn’t sing.
              <br />
              <br />
              So in 1992 my friend AC was singing at a religious retreat. He
              wasn’t performing or anything, he was just singing in the shower.
              He and Leo were the other guys in Orlando’s van that could sing.
              Some friends of AC heard him singing and when he got out of the
              shower, they approached him. They asked him if he wanted to
              perform at a show of sorts. I think it was the anniversary of
              Pallens, it was a karate dojo, Please don’t quote me on that tho.
              It’s been a long time since those days.
              <br />
              <br />
              AC approached me at lunch time on November 02, 1992. I’m not sure
              why I remember that, but I do. He asked me to sing with him at the
              show. I thought about it for a second and was certainly intrigued.
              The only thought was that his voice was very much like Ralph
              Tresvant and mine was more like Johnny Gill’s voice. It might seem
              a little “weird” with those two different voices singing together.
              So we talked a bit more and we decided to pick up a few more
              people.
              <br />
              <br />
              I picked up my friends Marque and Leo. AC picked up Andrew and
              Geoffrey. That was the start of our little singing group. We
              didn’t even have a name yet, but we thought we could do a little
              something. I think the first song we ever learned was In The Still
              Of The Night by Boyz II Men. I think that song took us a few weeks
              to learn. We were all new to this and had never broken parts out
              and we had never sung those parts all together. I mean it was
              pretty hard. None of us really had the innate talent to just break
              down a song to its subsequent parts.
              <br />
              <br />
              <Image
                src="/images/apex/apex_002.jpg"
                alt="Apex 002"
                width={[100, 100, 319]}
                height="auto"
                float="right"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              So we brought in Quincy. Now this guy could break it all down. I
              mean he could break every little part down to the nitty gritty.
              Quincy was super talented albeit gifted. He was a huge help to the
              group.
              <br />
              <br />
              In time Marque left the group. I mean Marque was crazy smart and
              talented. He also started for our High School basketball team. I
              mean he was going places and this group would have held him back.
              He was my best friend and he’s still one of my closest friends,
              but I don’t think this group was ever the right fit for him.
              <br />
              <br />
              So we continued with the six of us. The group consisted of AC,
              Andrew, Geoffrey, Leo, Quincy and myself. During these years we
              did songs with music, mostly karaoke music and some acapella. We
              could hold a tune and we were slightly less than decent, but
              people still booked us from time to time so we kept at it. Having
              Quincy in the group gave us some arrangements we could try or
              attempt to sing. I was also now getting more deeply into music and
              learned how to break songs down. I learned how to arrange songs
              that were not acapella to be acapella. Although it’s pretty common
              nowadays, back in the early nineties it wasn’t all that common at
              all.
              <br />
              <br />
              We chugged along for a little bit until Quincy and Geoffrey
              weren’t really showing up to practices. Or they would show up
              late, like hours late. So the four of us sat down and talked about
              it. We decided to let these two guys go. Andrew and AC talked to
              Geoffrey and I talked to Quincy. I mean this really sucked.
              Geoffrey lived like 2 houses away from Andrew and they grew up
              together. Quincy’s sister was my girlfriend. This was one of the
              tougher moves that we made early on. I think it came down to the
              four of us deciding that we need to take this more seriously. I
              think at the time from time to time, we had shows on the weekends
              and we practiced 3 nights a week.
              <br />
              <br />
              So after those two left, we picked up a guy named Lysander.
              Lysander was really good. He had a falsetto and could really sing.
              He was in the group for a bit.
              <br />
              <br />
              I think at this time Leo and I, who are the oldest in the group,
              decided that we need to start taking our lives a little bit more
              seriously. It sounds weird, but Leo needed to progress in college
              and I had some issues with the courts and the law. (It’s a long
              story and I’d rather not get into it, lol.) So we both quit the
              group and went about our own business. Meanwhile AC, Andrew and
              Lysander decided to continue the "dream". They picked up Andrey
              and Errol.
              <br />
              <br />
              Andrey was AC’s cousin. They had met at a cotillion for one of
              their other cousins. I use the word cousin loosely. In the
              Pilipino community you can have a ton of Aunts, Uncles and cousins
              you’re not truly related to. AC realized that Andrey could sing
              and man was he good. So AC asked Andrey if he wanted to sing in
              their group. Andrey said yes and the rest is history.
              <br />
              <br />
              Errol was a little bit different. He was friends with AC, Andrew
              and Lysander. See, Errol tried out for the group back in the day.
              He and Lysander were two left at the end and we could only take
              one of them. I mean Errol could sing, but he was way more of a
              lead and in my own ignorant hubris, I believed we already had the
              leads that we needed. I mean I was being egotistical and stupid.
              Errol was amazing. I mean he is in my top 3 singers of all time.
              To me, that’s huge! He is truly and hands down so fu**ing amazing
              that I know that I could never ever in a million years ever be
              able to sing like this cat. So when he first tried out for the
              group, we took Lysander. Mistakes were made and I humbly admit it.
              <br />
              <br />
              So now the group was AC, Andrew, Lysander, Andrey and Errol. They
              did like one or two shows in this five guy configuration. They
              were okay. The issue was that no one in the group could arrange
              vocals. There were no real musicians in the group anymore. They
              also didn’t have a bass in the group. Andrey could sing some bass,
              but he really was a better lead. Eventually they got Leo back in
              the picture. Leo came back in and sang bass and really filled out
              the sound of the group. The six of these guys did a handful more
              shows and were doing okay.
              <br />
              <br />
              They ended up calling me up and asked me to arrange some songs for
              them and teach them those songs. These guys besides Errol and
              Andrey were my friends so I said yeah. I remember the first time I
              came back to the group. I wasn’t there to sing or anything, I was
              just there to arrange the music and teach the parts. Yeah my ego
              was still raging and I was still an idiot. I arranged this
              Pilipino song for them for Fiesta Filipina. Here’s the funny-ish
              part. There were six guys in the group. Leo sang bass, so most of
              the time he was on the root of the chord unless he created some
              cool textures to the sound outside of the root. That leaves 5
              guys. There is one part that should be lead, so 5 now becomes 4.
              If you know anything about music, most "normal" chords have three
              parts. Now you can sauce these parts up a little bit by adding
              other notes. The other notes not in the normal parts of the chord
              sound dissident and are really tough to sing. Although when all
              the parts are together, that part adds an important texture to the
              arrangement. Typically parts will only have maybe 30% of the part
              being dissident. You learn how to listen to it and you sing it.
              Now I gave 3 of the guys easy parts. Parts that made sense from
              beginning to end. These parts were easy enough to just sing in
              your sleep. I gave Andrey all of the dissident parts. I mean I
              gave him every single dissident note. He never ever got off of the
              difficult part and you know what? He sang it perfectly. I was
              trying to sabotage him, because I didn’t know him and wasn’t sure
              I would like him.
              <br />
              <br />
              This was the moment I realized how childish I was and how mired in
              ignorance I existed in. He sang it perfectly without complaint.
              Andrey ended up becoming my closest friend in the group. He really
              did an amazing job and he taught me humility and that my arrogance
              was petty and idiotic. The world is a much larger place than my
              little existence and being stupid at this level will never allow
              me to get to the next level or the next level after that.
              <br />
              <br />
              I eventually re-joined the group and the seven of us sang as a
              group for about a year or so. The reason we could sing with the
              seven of us is because we were doing primarily acapella. Acapella
              was not huge at all at this time. It wasn’t at all mainstream nor
              was it really anywhere. There were acapella groups in colleges and
              there were a few amateur groups, but there weren’t really any
              professional groups.
              <br />
              <br />
              I remember in 1995, I saw the House Jacks perform for the first
              time. My family were already fans of the group. My cousins would
              flock to their show whenever they were in town. This was a
              professional acapella group. They were outstanding, but their
              concerts were like 200 or so people. I mean this was not
              mainstream at all. It was almost like a fringe of the fringe. So I
              watched them perform and I was immediately hooked. They were super
              enjoyable to watch and I really liked them. I came back to the
              group and told them all about the House Jacks and how hands down
              these guys were. I got a few of the guys to go to their next local
              show in Berkley. The guys were stunned. So the House Jacks had six
              guys in the group and what they did was they had one guy singing
              lead, one guy singing bass, three guys doing background and
              harmonies and one guy did vocal percussion. It wasn’t beat boxing,
              it was vocal percussion. The vocal percussion guy’s name is Andrew
              Chaikin, you should look him up.
              (https://en.wikipedia.org/wiki/Kid_Beyond)
              <br />
              <br />
              At this point we were competing with other acts in the Pilipino
              community. There was a group called Touch in Sacramento, One
              Vision was from Davis, If (Island Flavor) was from San Francisco,
              Pinay Divas was from Vallejo, Epic Voices from Daly CIty,
              Innerlude was from San Jose, One Voice was from Heracles, etc.
              There were a lot of groups and performers at the time. We were
              trying to compete with them in their style. It was primarily R&B
              with music backgrounds and choreographed dancing. We (Apex) were
              pretty much at the bottom of the pile. We could sing and we could
              dance, we just weren’t as good as the other groups. So I thought
              about how we could compete with these other acts. I thought about
              it a lot and I came up with the idea of only doing acapella. The
              group was not on board with me at all on this. They had a lot of
              resistance. I think this was the first time that I really made a
              decision that went against the grain.
              <br />
              <br />
              We ended up learning a bunch of songs. We perfected them as well
              as we could and started performing. The one show that really
              stands out to me is the PCN (Pilipino Culture Night) at Ohlone
              college. Since we couldn’t really be compared to any other group
              we were basically at the top of the list in our very own category.
              Our gamble worked! No one really ever compared us to any other
              group and we really shone like a bright star on the horizon.
              <br />
              <br />
              At Ohlone, we were in the middle of all the acts that were
              performing. We certainly weren’t at the beginning of the show
              because we were unique. We definitely were not at the end of the
              show because I don’t think we were the best group to be booked.
              Bing in the middle was pretty good for us. We did our little 15
              minute set of acapella music. We thanked the crowd and bowed to
              them. As we were leaving the stage, the promoters asked us if we
              could sing another song. Apparently the next group was not there
              or they weren’t ready to perform. So we turned right around and
              told the crowd that we were going to sing another song for them.
              The interesting thing is that we could. We could just sing another
              song. There was no issue with getting our music ready, there was
              nothing we really needed to do but just sing. We performed the
              song and thanked the crowd and bowed. As we were leaving the
              stage, the promoters asked us to sing one more song. We laughed
              and said, “Sure!” We sang another song. The song I’m sure went
              well, because afterwards I reflected on what just happened. I
              realized that we were pretty good. We were legit! We could extend
              any set and just do what we need to do. We didn’t need prep, we
              were kind of like pros.
              <br />
              <br />
              We went on like this for a couple of years. Lysander eventually
              left the group. He left in 1996 and we were sad to see him leave.
              He was a pretty integral part of the group and we missed him. I
              remember that we tried calling him and begging him to stay, but
              his mind was made up.
              <br />
              <br />
              The six of us continued and around this time in 1996 is when we
              met Brandon. Apparently he was managing Pinay Divas and he had
              just gotten fired, lol. We were doing a show with Pinay at the
              Radisson in San Francisco and Pinay Divas let Brandon go that
              night. He saw us and approached us to see if we wanted to be
              managed by him. The funny thing is that we had just recently
              gotten approached about management from another person. This other
              person was a woman that went to the same church as Andrey.
              <br />
              <br />
              Now at this point I gotta talk about Brandon a little bit. He had
              worked at Classified Records. They were not a competitor of ours
              or anything, but they were a record label in the Pilipino
              community. I think they might have looked at us at one point but
              found us wanting or they just didn't see a market for Pilipino
              acapella groups. Either way none of that really matters, except
              Classified Records had some of the top artists in the community
              and they were pretty much a pillar of the community.
              <br />
              <br />
              We had gotten word that Brandon was a snake and a terrible person
              and all that. Basically we should avoid him at all costs. On the
              other hand the woman from Andrey’s church was an upstanding
              individual and was well liked. Both of the managers courted the
              group over the next couple of weeks. We talked with Brandon and
              the woman from Andrey’s church. After all of this we all sat down
              and discussed the pros and cons of each. We voted and the results
              were 5 to 1 in favor of the woman. I was the only one that thought
              that Brandon should manage us.
              <br />
              <br />
              Here was my thought process. Brandon is a snake and pretty much a
              jerk. She was really nice and everyone loved her, but in the music
              industry you should love the group and not the manager. I also
              thought that having someone hungry like Brandon would propel the
              group even farther than someone who is "nice". Yes I thought
              Brandon was an a$$hole, but he was gonna be "our" a$$hole and he
              would be that jerk for us. We could be loved and he could be hated
              and that suited me fine.
              <br />
              <br />
              After all was said and done, we went with Brandon. The group again
              was not happy with this, but I told them that it was by far the
              best decision. I think by this point the group trusted me and my
              judgement, well they trusted me enough to roll with what I figured
              would be the right move. It was a tough choice. My heart was
              telling me that this was the wrong choice while my mind was
              convinced that this was the correct choice. In the end it all
              worked out. I think it’s a tid bit of a story that has been
              forgotten in the annals of Apex lore.
              <br />
              <br />
              A funny thing occurred. Evidently right after Brandon got let go
              of Classified and Pinay Divas, he got a job with Prince/SF. PSF
              was a booking agency that specializes in acapella acts far and
              wide. They had a ton of acts that they represented, some exclusive
              and others just on the roster. Interestingly one of their
              exclusive acts was, the House Jacks. It’s a bit crazy how
              everything came full circle. We started our bookings with PSF and
              eventually signed an exclusive agreement with them. We stayed with
              PSF for many many years. The owner of PSF is still one of my
              greatest friends to this very day.
              <br />
              <br />
              Over time as we got better and better in the acapella world we
              started to do even larger shows. One of the larger shows was the
              main stage at Cal Expo. It was something like 4 days of 3 shows a
              day. It was actually ridiculously grueling. You got to remember,
              we were an acapella group. Everyone sang all the time. There was
              no rest for any of us during the set. This is where we learned so
              much about performing. At the beginning of the run we were doing
              song after song after song. In between each of the sets, the guys
              would go off and enjoy Cal Expo while I stayed behind and watched
              all of the different acts perform. I started to realize how much
              talking they did and how they put their shows together.
              <br />
              <br />
              The trick we had for the first time was that we had consecutive
              shows day after day. This allowed us to try different things. I
              could figure out what works and what doesn’t work. One of the most
              important things I learned was that we didn’t have to do song
              after song. We didn’t have to constantly sing song after song. We
              started doing less songs and we started to put on shows, I mean
              real shows. I think at the end of the run, we were singing about 7
              songs over the course of an hour. We learned how to talk to the
              crowd and how to set songs up with stories. Errol was actually on
              the verge of losing his voice on day two and we learned how to
              give him a break. In the middle of the set, Errol would talk into
              the mic and tell us he had to use the bathroom. We would all argue
              and he would say that he just can’t help it and in the end he
              would leave the stage and say he’d be right back. We would stand
              there stunned and eventually we would start a song without Errol.
              We’d play like we were trying to figure out the parts and how we
              would cover his part. We’d work out all the logistics and
              eventually sing a song. He would come back mid way through the
              song and just sit on the stage laughing. We would finish the song
              and welcome Errol back to the stage and we would go on with the
              show. That little skit would take up 15 minutes or more. The crowd
              was thoroughly entertained and we got Errol to take a rest. All in
              all it was a win-win-win for us, Errol and the crowd.
              <br />
              <br />
              <Image
                src="/images/apex/apex_004.jpg"
                alt="Apex 004"
                width={[100, 100, 319]}
                height="auto"
                float="right"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              We learned how to talk to the crowd and how to take control of the
              stage for the first time. It was definitely an eye opening
              experience for us. That was probably the single most important run
              of shows we ever did. We learned so much. Our show changed so much
              because of this little run. Having the opportunity to be able to
              make minor adjustments between every show and everyday was
              instrumental. Also observing the bird trainers, the one man band,
              the acrobats, etc. was absolutely pivotal in our development as
              artists. It wasn’t the biggest venue or the most illustrious place
              we ever performed at, but I think it was the most important place
              we ever had the pleasure to perform at. It was like we were doing
              the most important practice sessions ever with feedback. One thing
              I didn’t mention was that in the very beginning of our shows, we
              would start with 20 people and end with 5 people. People were
              leaving our shows. By the end, we would start with over two
              hundred and by the end of the show the amphitheater was packed to
              capacity and more.
              <br />
              <br />
              We continued to do shows and had bookings every weekend. In fact
              we were probably averaging about 2-3 shows per weekend for months
              at a time. We were actually getting very very popular. We did
              everything from weddings to graduations, anniversaries to
              retirement parties. We also did a ton of fairs and festivals. Only
              about 5-10% of our shows were with our Pilipino community. In the
              end the artists that were only really doing Pilipino shows were at
              a disadvantage. They didn’t do anywhere close the same amount of
              shows nor did they ever really get to practice the way we did.
              They also never really learned how to engage the crowd and how to
              present their image. By this point we were one of the more popular
              groups in the Pilipino circuit, but honestly we didn’t really
              care. The fact of the matter is that our community rarely paid and
              outside of the community they always paid and paid really well.
              <br />
              <br />
              As time went on we continued to enjoy the success of the group and
              the following that we had inside and especially outside of the
              community. I think at the beginning of 1997, we decided that we
              should record music. I mean we had been doing this singing thing
              for the past 5 years and we had gotten to the point where we were
              actually pretty good.
              <br />
              <br />
              The first record we tried to release was a song that I wrote about
              a girl that cheated on me and broke my heart. She knows who she
              is, lol. We’re actually pretty good friends now, but back then I
              was pretty heart broken and wrote this song called Without You.
              Errol wrote the verses and I wrote the music and chorus. We
              recorded the song as an acapella song and had a "release party" at
              the Julia Morgan Theater in Berkeley. Yeah that was not the right
              way to do it at all. It was fine, but it really was our first
              attempt at trying to do something. This did not work at all and I
              learned from this mistake and took it back to the drawing board.
              We ended up hiring Buddy Salesman (Studio 684) and Triston Bishop
              (House Jacks) to write and produce our music backed songs. They
              agreed to 5 songs and all the recording time that we needed to
              finish the recordings.
              <br />
              <br />
              We got into the studio and the first song we recorded was a song
              that the House Jacks performed. Tristan and Austin Willacy had
              written the song and we were more than welcome to cover it. The
              second song we did was Say You’ll Stay. This was a song that
              Tristan wrote about his wife and his ordeal when he proposed to
              her. It was a beautiful song. We created the music and the
              harmonies and recorded it. It came out so well that while we were
              recording it, we decided to release it.
              <br />
              <br />
              Now let me backup a little bit. Before we got into the studio,
              Brandon, Robert Casipe, Leo Chan and I started a company called
              C3D Enterprises. Since this part of the story bleeds into the C3D
              Enterprises section, I’ll gloss over this a bit since I’ll cover
              this in the other section. During this period Brandon was also
              working for an independent promoter. Now I know you hear “Indie
              Promoter” and think that these are a dime a dozen, but in reality
              there were only 4 of these true Indie Promoters around the US.
              They had a specific function in the music industry. They
              essentially got records played on radio stations in the
              Contemporary Hits Radio / Rhythm genre. I can’t go into detail of
              how they did this or why they did this, suffice it to say for the
              purposes of this story, it’s just what they did. Brandon brought
              me into this business and the owner of the business taught me. I
              mean he really sat down and taught me how all of this works. It
              was truly eye opening. I also promised to never tell anyone how
              this works. In fact most record label reps don’t even know how
              this works. So this is me keeping my mouth shut 29 years later.
              <br />
              <br />
              After working for this business man for a few months is when we
              decided to hire Buddy and Tristan (T-Budz) to record our first 5
              records. By this point Brandon and I were knee deep into the music
              industry. We didn’t pass out flyers or put up posters or anything
              like that. We were in the music business. The actual music
              industry. With the tons of information and knowledge we were
              gaining we decided to really get Apex on the board. This is why we
              engaged T-Budz. We fashioned the records and made sure that they
              were industry ready. We continued to prep the group to function as
              a legitimate group/act.
              <br />
              <br />
              We ended up releasing Say You’ll Stay as KAI. Unfortunately Apex
              was already owned and operated for a singing group that was signed
              to the BMG Music Group. We sat down at Call State Hayward and
              discussed so many different names. Some of them I can’t mention
              here, but we did think of Pinoy Divos, etc. Hahaha, this was all
              pretty funny. We ended up coming up with Kaibigan. We then
              shortened it to KAI. Kaibigan means brotherhood or friendship.
              It’s a representation that we all felt with each other.
              <br />
              <br />
              At this point I was still in the group. I was a functioning member
              of Apex as Lawrence A de Guzman, but I was also in management as
              Larry D. I was also a record promoter as Larry D. I also owned one
              fourth of the management company and record label. I was wearing a
              ton of hats. All the while my autoimmune disease was rearing its
              ugly head.
              <br />
              <br />
              <Image
                src="/images/apex/apex_003.jpg"
                alt="Apex 003"
                width={[100, 100, 319]}
                height="auto"
                float="right"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              I now know that I have an autoimmune issue with my body. Back then
              I didn’t know anything about it. I thought that I was just in pain
              all the time because well I was just in pain all the time. I knew
              that this wasn’t normal and that no one else had this issue, but I
              kept it secret for a long time. I struggled all through my
              twenties with pain, standing, walking and just existing. I didn’t
              know what was going on, but I just bore it. The issues started
              sporadically since I was 17 and have continued to get worse and
              worse. I don’t ever really complain about it, because it’s no one
              else's issue to deal with but me. By the time I was 22 or 23 it
              was pretty unbearable and I couldn’t hide it anymore. I started
              hunching over and couldn’t stand straight anymore. Prior to me not
              being able to stand straight, I ended up quitting the group.
              <br />
              <br />
              There were a few reasons why I quit the group. The first reason
              was that we were getting more popular and my continued inclusion
              in the group was going to get very taxing. The second reason is
              that I was the only one that could leave the group and still stay
              in the group. The third reason was that 6 members in a singing
              group was a bit much. With six members getting compared to Take 6
              would be an issue. At the time there were groups like BackStreet
              Boys, New Edition, etc. that had five members. Five was a way
              better number of members. Leaving the group made the most sense
              for the direction of my life and what I wanted to accomplish.
              <br />
              <br />
              <Image
                src="/images/apex/apex_005.jpg"
                alt="Apex 005"
                width={[200, 200, 519]}
                height="auto"
                float="left"
                ml={10}
                mr={15}
                mb={5}
                mt={5}
              />
              As much as I miss being in Apex and later KAI, it was the right
              move to make. Being on stage with crowds screaming for you is a
              feeling that I’ve never ever replicated. I don’t know if it can
              ever be replicated. It is its own thing and I truly do miss it.
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Apex;
