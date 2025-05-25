import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./css/Universal.css";

import { useColorContext } from "./context/Color";
import useGetJSON from "./utils/GetJSON";
import Theme from "./theme/Theme";
import UpperNavigation from "./component/UpperNavigation";
import Main from "./pages/Main";
import UpperBumper from "./component/UpperBumper";
import Footer from "./component/Footer";

import type { UpdatePageProps, AudioData } from "./types/GenericTypes";

import UpdatePage from "./component/UpdatePage";
import VideosPage from "./pages/VideosPage";
import AudioPage from "./pages/AudioPage";
import AudioPlayer from "./elements/AudioPlayer";
import AudioPlayList from "./elements/AudioPlayer/AudioPlayList";

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

function App() {
  const prime = useColorContext() as ColorKey;
  const root = document.getElementById("root");
  // console.log("Theme", Theme().colors[prime].darkest);
  if (root) {
    root.style.backgroundColor = Theme().colors[prime].darkest;
  }
  document.body.style.backgroundColor = Theme().colors[prime].darkest;

  const [currentSong, setCurrentSong] = useState<AudioData | null>(null);

  const data = useGetJSON({});
  // console.log("data", data);
  const navigate = useNavigate();
  const audioCallback = (data: AudioData) => {
    const { title, url, description, image, add } = data;
    if (add) {
      // add this to the playlist
    } else {
      setCurrentSong(data);
      // add is false so we should just immediately play this song
    }
    console.log("App/audioCallback", title, url, description, image, add);
  };
  const callbackFromMain = (info: UpdatePageProps) => {
    // console.log("callbackFromApp", info);
    let navigateTo = "/updatePage";
    let additionalInfo = info;
    switch (info.title) {
      case "Videos":
        navigateTo = "/videos";
        additionalInfo = Object.assign({}, info, { videos: data?.videos });
        break;
      case "Personal Music": {
        additionalInfo = Object.assign({}, info, { music: data?.music });
        navigateTo = "/audio";
        // console.log("myVar", myVar);
        /*
        navigateTo = "/audio";
        additionalInfo = Object.assign({}, info, {
          music: data?.music as AudioData[],
          callback: audioCallback,
        });
        */
        break;
      }
      default:
        console.log("App:", info.title);
    }
    navigate(navigateTo, { state: additionalInfo });
  };

  return (
    <>
      <Box
        position="relative"
        minH="100vh"
        m={0}
        p={0}
        bg={`${prime}.darkest`}
        mx="auto"
        h="100px"
        w={[325, 416, 546, 694, 894, 1020, 1428]}
      >
        <UpperNavigation />
        <UpperBumper />
        <Routes>
          <Route
            path="/"
            element={<Main data={data} callback={callbackFromMain} />}
          />
          <Route path="/updatePage" element={<UpdatePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route
            path="/audio"
            element={<AudioPage callback={audioCallback} />}
          />
        </Routes>
        <Footer />
        {currentSong && (
          <Box
            position="fixed"
            bottom={0}
            width="100%"
            bg={`${prime}.darkest`}
          ></Box>
        )}

        <AudioPlayer />
        <AudioPlayList />
        {/* I think this is where the audio player should go */}
      </Box>
    </>
  );
}

export default App;

/*
          <Route
            path="/updatePage"
            element={<UpdatePage content={} title={} images={} />}
          />
          */
