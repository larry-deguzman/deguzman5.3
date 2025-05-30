import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { PlaylistItem, PlaylistContextType } from "../types/GenericTypes";

// eslint-disable-next-line react-refresh/only-export-components
export const PlaylistContext = createContext<PlaylistContextType | undefined>(
  undefined
);

export const PlaylistProvider = ({ children }: { children: ReactNode }) => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  const addToPlaylist = (item: PlaylistItem) => {
    setPlaylist((prev) => [...prev, item]);
  };

  const removeFromPlaylist = (id: string) => {
    setPlaylist((prev) => prev.filter((item) => item.id !== id));
  };

  const clearPlaylist = () => setPlaylist([]);

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        clearPlaylist,
        setPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
