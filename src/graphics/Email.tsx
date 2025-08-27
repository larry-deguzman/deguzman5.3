import { Box } from "@chakra-ui/react";
import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

type Props = {
  width: string;
  click: () => void;
};

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

export default function Email({ width, click }: Props) {
  const prime = useColorContext() as ColorKey;
  const white = Theme().colors[prime].darkest;
  const blue = Theme().colors[prime].lightest;

  return (
    <Box
      onClick={click}
      cursor="pointer"
      style={{
        display: "block",
        width: width,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g id="email">
          <rect
            x="24.5"
            y="31.83"
            width="51.7"
            height="36.33"
            rx="3.66"
            ry="3.66"
            fill={blue}
          />
          <path
            fill={white}
            d="M27.49 37.46v25.35l12.88-12.79-12.88-12.56zM60.33 50.02 73.2 62.81V37.46L60.33 50.02zM53.61 56.67s-1.49 1.41-3.27 1.45c-1.78-.04-3.27-1.45-3.27-1.45l-4.59-4.38-12.77 12.69h41.25L58.19 52.29l-4.59 4.38Z"
          />
          <path
            fill={white}
            d="M49.13 54.5c.58.48 1.22.48 1.22.48s.64 0 1.22-.48c.49-.4 19.4-19.49 19.4-19.49H29.73S48.65 54.1 49.13 54.5Z"
          />
        </g>
      </svg>
    </Box>
  );
}
