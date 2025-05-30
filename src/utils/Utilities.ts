import type { Audio } from "../types/GenericTypes";

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

export function getFolderNameFromUrl(url: string): string {
  const parts = url.split("/");
  const folderName = parts[parts.length - 2]; // Assuming the folder is the second last part
  return folderName;
}

export function sortPlaylistByFolder(playlist: Audio[]) {
  const grouped: { [folder: string]: Audio[] } = {};
  for (let i = 0; i < playlist.length; i++) {
    const folder = getFolderNameFromUrl(playlist[i].url);
    if (!grouped[folder]) {
      grouped[folder] = [];
    }
    grouped[folder].push(playlist[i]);
  }
  return grouped;
}
