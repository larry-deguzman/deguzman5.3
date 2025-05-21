import Theme from "../theme/Theme";

export type ColorKey = keyof ReturnType<typeof Theme>["colors"];

export type Deguzman53Card = {
  title: string;
  picture: string;
  link: string;
  description: string;
};

export type Deguzman53 = {
  cards: Deguzman53Card[];
};

export type UpdatePageProps = {
  title: string;
  content: string;
  images: string[];
};

export type CardData = {
  title: string;
  picture: string | string[];
  description: string;
};

export type CardProps = {
  data: Deguzman53 | null | Deguzman53Card | CardData;
  callback: (info: UpdatePageProps) => void;
};
