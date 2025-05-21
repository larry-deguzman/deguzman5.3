import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";
import Card from "../elements/Card";

import "../css/CardHolder.css";
import type { Deguzman53 } from "../types/Deguzman53";
import type { UpdatePageProps } from "../types/UpdatePageProps";

type Props = {
  data: Deguzman53 | null;
  callback: (info: UpdatePageProps) => void;
};

const CardHolder = ({ data, callback }: Props) => {
  // console.log("cardholder/data", data);

  const setUpCallback = (info: UpdatePageProps) => {
    callback(info);
  };

  const getCards = () => {
    if (!data) {
      return null;
    } else if (data.cards?.length <= 0) {
      return <div>No cards available</div>;
    } else {
      const cardArray = [];
      for (let i = 0; i < data.cards.length; i++) {
        cardArray.push(
          <Card
            key={`card${i}`}
            width="319px"
            data={data.cards[i]}
            callback={setUpCallback}
          />
        );
      }
      return cardArray;
    }
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
