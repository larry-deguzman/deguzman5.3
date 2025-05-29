import type { PlaylistItem } from "../types/GenericTypes";

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PlayListHelp = {
  shouldIdBeCurrent: (playlist: PlaylistItem[]): boolean => {
    // console.log("Utilities/shouldIdBeCurrent", playlist);
    // console.log("Utilities/shouldIdBeCurrent/item", item);

    if (playlist.length === 0) {
      return true;
    } else if (playlist.length === 1) {
      if (playlist[0].isPlaying) {
        return false;
      } else if (playlist[0].hasPlayed) {
        return true;
      } else {
        return true;
      }
    }
    const lastItem = playlist[playlist.length - 1];
    if (lastItem.isPlaying) {
      return false;
    } else if (lastItem.hasPlayed) {
      return true;
    }
    return true;
  },
  setAllPlayed: (playlist: PlaylistItem[]): PlaylistItem[] => {
    return playlist.map((item) => ({
      ...item,
      hasPlayed: true,
      isPlaying: false,
    }));
  },
};

export { PlayListHelp };
