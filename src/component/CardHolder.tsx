import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Card from "../elements/Card";

import "../css/CardHolder.css";

import type { CardProps, UpdatePageProps } from "../types/GenericTypes";

const CardHolder = ({ data, callback }: CardProps) => {
  // console.log("cardholder/data", data);

  const setUpCallback = (info: UpdatePageProps) => {
    callback(info);
  };
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getCards = () => {
    if (!data) {
      return null;
    } else if (
      !("cards" in data) ||
      !Array.isArray((data as any).cards) ||
      (data as any).cards.length <= 0
    ) {
      return <div>No cards available</div>;
    } else {
      const cards = (data as { cards: any[] }).cards;
      const cardArray = [];
      for (let i = 0; i < cards.length; i++) {
        cardArray.push(
          <Card key={`card${i}`} data={cards[i]} callback={setUpCallback} />
        );
      }
      return cardArray;
    }
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const breakpointColumnsObj = {
    default: 4,
    1436: 2,
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
