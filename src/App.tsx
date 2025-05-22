import { Box } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./css/Universal.css";

import { useColorContext } from "./context/Color";
import useGetJSON from "./utils/GetJSON";
import Theme from "./theme/Theme";
import UpperNavigation from "./component/UpperNavigation";
import Main from "./component/Main";
import UpperBumper from "./component/UpperBumper";
import Footer from "./component/Footer";

import type { UpdatePageProps } from "./types/GenericTypes";

import UpdatePage from "./component/UpdatePage";
import VideosPage from "./pages/VideosPage";

type ColorKey = keyof ReturnType<typeof Theme>["colors"];

function App() {
  const prime = useColorContext() as ColorKey;
  const root = document.getElementById("root");
  // console.log("Theme", Theme().colors[prime].darkest);
  if (root) {
    root.style.backgroundColor = Theme().colors[prime].darkest;
  }
  document.body.style.backgroundColor = Theme().colors[prime].darkest;

  const data = useGetJSON({});
  // console.log("data", data);
  const navigate = useNavigate();
  const callbackFromMain = (info: UpdatePageProps) => {
    // console.log("callbackFromApp", info);
    let navigateTo = "/updatePage";
    const additionalInfo = info;
    switch (info.title) {
      case "Videos":
        navigateTo = "/videos";
        additionalInfo.videos = Array.isArray(data?.videos)
          ? data.videos
          : undefined;
        break;
      default:
    }
    navigate(navigateTo, { state: additionalInfo });
  };

  return (
    <>
      <Box
        minH="100vh"
        m={0}
        p={0}
        bg={`${prime}.darkest`}
        mx="auto"
        h="100px"
        w={[325, 416, 546, 694, 894, 1020, 1428]}
      >
        <UpperNavigation />
        <UpperBumper />
        <Routes>
          <Route
            path="/"
            element={<Main data={data} callback={callbackFromMain} />}
          />
          <Route path="/updatePage" element={<UpdatePage />} />
          <Route path="/videos" element={<VideosPage />} />"
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;

/*
          <Route
            path="/updatePage"
            element={<UpdatePage content={} title={} images={} />}
          />
          */
