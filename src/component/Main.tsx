import MainPicture from "../elements/MainPicture";
import CardHolder from "./CardHolder";
import type { Deguzman53 } from "../types/Deguzman53";
import type { UpdatePageProps } from "../types/UpdatePageProps";

type Props = {
  data: Deguzman53 | null;
  callback: (info: UpdatePageProps) => void;
};
const Main = ({ data, callback }: Props) => {
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
