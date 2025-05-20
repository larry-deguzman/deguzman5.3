import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Card from "../elements/Card";

import { getRandomInt } from "../utils/Utilities";
import "../css/CardHolder.css";
import type { Deguzman53 } from "../types/Deguzman53";

type Props = {
  data: Deguzman53 | null;
};

const CardHolder = ({ data }: Props) => {
  console.log("cardholder/data", data);

  const getCards = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
      const randomHeight = getRandomInt(200, 600);
      const staticWidth = 300;
      cards.push(
        <Card
          key={`card${i}`}
          width={`${staticWidth}px`}
          height={`${randomHeight}px`}
        />
      );
    }
    return cards;
  };

  const breakpointColumnsObj = {
    default: 4,
    1436: 3,
    1024: 2,
    900: 2,
    700: 1,
    550: 1,
    420: 1,
    360: 1,
  };

  return (
    <Box margin="auto" w="fit-content" p={0} mt={10}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {getCards()}
      </Masonry>
    </Box>
  );
};

export default CardHolder;
