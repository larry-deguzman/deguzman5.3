import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  callback: (who: string) => void;
};

const CloseButton = ({ callback }: Props) => {
  const id: string = "closeButton";

  const [hovered, setHovered] = useState(false);
  return (
    <Button
      onClick={() => {
        callback(id);
      }}
      bg="transparent"
      _hover={{ bg: "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaXmark
        style={{
          fontSize: "24px",
          color: hovered ? "#FFF" : "#000",
        }}
      />
    </Button>
  );
};

export default CloseButton;
