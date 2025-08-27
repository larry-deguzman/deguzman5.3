import { Box } from "@chakra-ui/react";
import { useColorContext } from "../context/Color";
import Theme from "../theme/Theme";

type Props = {
  width: string;
  click: () => void;
};

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

export default function Linkedin({ width, click }: Props) {
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
        <g fill={blue} id="Linkedin">
          <rect
            x="20.44"
            y="20.1"
            width="59.81"
            height="59.79"
            rx="7.03"
            ry="7.03"
          />
          <circle fill={white} cx="33.7" cy="33.4" r="5.07" />
          <rect
            fill={white}
            x="29.25"
            y="42.43"
            width="8.9"
            height="28.41"
            rx=".42"
            ry=".42"
          />
          <path
            fill={white}
            d="M61.14 41.7c-4.51 0-6.91 1.55-8.61 3.75v-2.61c0-.23-.19-.42-.42-.42h-8.06c-.23 0-.42.19-.42.42v27.57c0 .23.19.42.42.42h8.06c.23 0 .42-.19.42-.42V55.43c0-.76.21-4.65 3.25-5.63 3.37-1.09 4.89.25 5.61 1.27.72 1.01.93 2.5.93 4.31v15.03c0 .23.19.42.42.42h8.06c.23 0 .42-.19.42-.42V53.68c0-9.52-4.65-11.99-10.08-11.99Z"
          />
        </g>
      </svg>
    </Box>
  );
}
