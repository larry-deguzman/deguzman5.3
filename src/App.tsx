import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";

declare global {
  interface Window {
    audioPlayer: React.RefObject<HTMLAudioElement>;
  }
}

import "./css/Universal.css";

import { useColorContext } from "./context/Color";
import { usePlaylist } from "./hooks/Playlist";
import useGetJSON from "./utils/GetJSON";
import Theme from "./theme/Theme";
import UpperNavigation from "./component/UpperNavigation";
import Main from "./pages/Main";
import UpperBumper from "./component/UpperBumper";
import Footer from "./component/Footer";

import type {
  UpdatePageProps,
  PlaylistItem,
  AudioData,
} from "./types/GenericTypes";

import UpdatePage from "./component/UpdatePage";
import VideosPage from "./pages/VideosPage";
import AudioPage from "./pages/AudioPage";
import AudioPlayer from "./elements/AudioPlayer";
import AudioPlayList from "./elements/AudioPlayer/AudioPlayList";

import { shuffleArray } from "./utils/Utilities";

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

function App() {
  const [currentSong, setCurrentSong] = useState<PlaylistItem | null>(null);
  const prime = useColorContext() as ColorKey;
  const player = useRef<HTMLAudioElement>(null);
  const { playlist, addToPlaylist, setPlaylist, clearPlaylist } = usePlaylist();
  // , removeFromPlaylist, clearPlaylist,
  const root = document.getElementById("root");
  // console.log("Theme", Theme().colors[prime].darkest);
  if (root) {
    root.style.backgroundColor = Theme().colors[prime].darkest;
  }
  document.body.style.backgroundColor = Theme().colors[prime].darkest;

  const data = useGetJSON({});
  // console.log("data", data);
  if (data && data.music) {
    data.music = shuffleArray(data.music);
  }
  const navigate = useNavigate();
  const playlistCallback = (song: PlaylistItem) => {
    player.current?.pause();
    const firstPart = [];
    const middle = [];
    const secondPart = [];
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === song.id) {
        // this is the song that is playing
        // this should go to th second part
        middle.push({
          title: song.title,
          url: song.url,
          id: song.id,
          hasPlayed: false,
          isPlaying: true,
        });
      } else {
        if (secondPart.length === 0) {
          // then I want to add it to the first part
          // hasPlayed = true
          // isPlaying = false
          firstPart.push(playlist[i]);
        } else {
          // then I want to add it to the second part
          // hasPlayed = false
          // isPlaying = false
          secondPart.push(playlist[i]);
        }
      }
    }
    if (secondPart.length === 0) {
      // then I need to go to the end of the first part
      if (firstPart.length === 0) {
        setCurrentSong(null);
      } else {
        firstPart[firstPart.length - 1] = {
          ...firstPart[firstPart.length - 1],
          hasPlayed: false,
          isPlaying: true,
        };
        // set this one to the current song
        setCurrentSong(firstPart[firstPart.length - 1]);
      }
    } else {
      // go to the beginning of the second part
      secondPart[0] = {
        ...secondPart[0],
        hasPlayed: false,
        isPlaying: true,
      };
      // set this one to the current song
      setCurrentSong(secondPart[0]);
    }
    setPlaylist([...firstPart, ...secondPart]);
    // this is only called when the user removes a song that is currently playing
  };
  const playerCallback = (command: string, song?: PlaylistItem) => {
    // console.log("App/playerCallback", command, song);
    switch (command) {
      case "close":
        setCurrentSong(null);
        clearPlaylist();
        break;
      case "ended": {
        const updatedPlaylist = [];
        let marker: number = 0;
        if (song) {
          for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === song.id) {
              // this is the current song
              updatedPlaylist.push({
                ...playlist[i],
                hasPlayed: true,
                isPlaying: false,
              });
              marker = 1; // set marker to 1 to indicate we found the song
            } else {
              if (marker === 0) {
                // this is before the current song
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: true,
                  isPlaying: false,
                });
              } else if (marker === 1) {
                // this is the song AFTER the current song
                // this is the target song that will be played next
                const obj: PlaylistItem = {
                  ...playlist[i],
                  hasPlayed: false,
                  isPlaying: true,
                };
                updatedPlaylist.push(obj);
                setCurrentSong(obj as PlaylistItem);
                marker = 2;
              } else {
                // this is after the current song
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: false,
                  isPlaying: false,
                });
              }
            }
          }
          setPlaylist(updatedPlaylist);
        }
        break;
      }
      case "fastForward": {
        console.log("App/playerCallback: fastForward", song);
        const updatedPlaylist = [];
        let marker: number = 0;
        if (song) {
          for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === song.id) {
              // this is the current song
              updatedPlaylist.push({
                ...playlist[i],
                hasPlayed: false,
                isPlaying: false,
              });
              marker = 1; // set marker to 1 to indicate we found the song
            } else {
              if (marker === 0) {
                // this is before the current song
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: true,
                  isPlaying: false,
                });
              } else if (marker === 1) {
                // this is the song AFTER the current song
                // this is the target song that will be played next
                const obj: PlaylistItem = {
                  ...playlist[i],
                  hasPlayed: false,
                  isPlaying: true,
                };
                updatedPlaylist.push(obj);
                setCurrentSong(obj as PlaylistItem);
                marker = 2;
              } else {
                // this is after the current song
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: false,
                  isPlaying: false,
                });
              }
            }
          }
        }
        setPlaylist(updatedPlaylist);
        break;
      }
      case "rewind": {
        // this one I don't know waht to do with yet
        const updatedPlaylist = [];
        let mark: number = 0;
        if (song) {
          for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === song.id) {
              // this is the current song
              updatedPlaylist.push({
                ...playlist[i],
                hasPlayed: false,
                isPlaying: false,
              });
              updatedPlaylist[updatedPlaylist.length - 2] = {
                ...playlist[i - 1],
                hasPlayed: false,
                isPlaying: true,
              };
              setCurrentSong({
                ...playlist[i - 1],
                hasPlayed: false,
                isPlaying: true,
              } as PlaylistItem);
              mark = 1;
            } else {
              if (mark === 0) {
                // this is before the current song
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: true,
                  isPlaying: false,
                });
              } else if (mark === 1) {
                updatedPlaylist.push({
                  ...playlist[i],
                  hasPlayed: false,
                  isPlaying: false,
                });
              }
            }
          }
        }
        break;
      }
      default:
        console.log("App/playerCallback: Unknown command", command);
    }
  };
  const audioCallback = (data: AudioData) => {
    const { title, url, id } = data;
    // if (add) {
    // this adds the song to the playlist
    const playlistItem: PlaylistItem = {
      title,
      url,
      id,
      hasPlayed: false,
      isPlaying: playlist.length === 0,
    };
    if (playlist.length === 0) {
      setCurrentSong(playlistItem as PlaylistItem);
    }
    addToPlaylist(playlistItem);
    // console.log("App/audioCallback", playlist);
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
          <>
            <AudioPlayer
              playerCallback={playerCallback}
              currentSong={currentSong}
            />
            <AudioPlayList playlistCallback={playlistCallback} />
          </>
        )}

        {/* I think this is where the audio player should go */}
      </Box>
    </>
  );
}

export default App;
