import MainPicture from "../elements/MainPicture";
import CardHolder from "./CardHolder";

import type { CardProps, UpdatePageProps } from "../types/GenericTypes";

const Main = ({ data, callback }: CardProps) => {
  const setUpCallback = (info: UpdatePageProps) => {
    callback(info);
  };

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <MainPicture />
      <CardHolder data={data} callback={setUpCallback} />
    </>
  );
};

export default Main;
