import Theme from "../theme/Theme";

export type ColorKey = keyof ReturnType<typeof Theme>["colors"];

export type VideoPageProps = {
  callback: () => void;
};

export type PlaylistContextType = {
  playlist: PlaylistItem[];
  addToPlaylist: (item: PlaylistItem) => void;
  removeFromPlaylist: (id: string) => void;
  clearPlaylist: () => void;
  setPlaylist: React.Dispatch<React.SetStateAction<PlaylistItem[]>>; // <-- add this
};

export type PlaylistItem = {
  id: string;
  title: string;
  url: string;
  isPlaying?: boolean;
  hasPlayed?: boolean;
  // add other fields as needed
};
export type Audio = {
  title: string;
  url: string;
  description: string;
  id: string;
  image?: string;
};

export type AudioHolderProps = {
  data: Audio[] | { [folder: string]: Audio[] };
  callback: (audioData: AudioData) => void;
};
export type AudioProps = {
  data: AudioData;
  callback: (audioData: AudioData) => void;
};

export type AudioData = {
  title: string;
  url: string;
  description?: string;
  id: string;
  image?: string;
  add?: boolean;
};

export type VideoData = {
  title: string;
  actualVideo: string;
  thumbnail: string;
};
export type VideoProps = {
  data: Videos;
  callback: (videoData: VideoData) => void;
};
export type Videos = {
  title: string;
  key: string;
  description: string;
};

export type VideoHolderProps = {
  data: Videos[];
  callback: (info: VideoData) => void;
};

export type Deguzman53Card = {
  title: string;
  picture: string;
  link: string;
  description: string;
};

export type Deguzman53 = {
  cards: Deguzman53Card[];
  videos: Videos[];
  music: Audio[];
};

export type UpdatePageProps = {
  title: string;
  content: string;
  images: string[];
  videos?: Videos[];
  music?: Audio[];
  callback?: (data: AudioData) => void;
};

export type CardData = {
  title: string;
  picture: string | string[];
  description: string;
};

export type CardProps = {
  data: Deguzman53 | null | Deguzman53Card | CardData | Videos;
  callback: (info: UpdatePageProps) => void;
};
