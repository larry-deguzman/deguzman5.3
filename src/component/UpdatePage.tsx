import { Box, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  title: string;
  content: string;
  images: [];
};
const UpdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state as Props;
  const { title, content, images } = info;
  let contentCopy = content;
  // console.log("UpdatePage", title, content, images);
  for (let i = 0; i < images.length; i++) {
    contentCopy = contentCopy.replace(
      /{image}/,
      `<Image src="${images[i]}" alt="image${i}" />`
    );
  }
  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Click Me to go back
      </Button>
      <Box>
        <Text>{title}</Text>
      </Box>
      <Box>
        <Text>{contentCopy}</Text>
      </Box>
    </>
  );
};

export default UpdatePage;
