import { usePlaylist } from "../hooks/Playlist";

const MyComponent = () => {
  const {
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    clearPlaylist,
    setPlaylist,
  } = usePlaylist();
  console.log(
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    clearPlaylist,
    setPlaylist
  );
  // ...use playlist and actions here...
};

export default MyComponent;
