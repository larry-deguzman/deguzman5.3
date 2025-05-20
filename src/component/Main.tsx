import MainPicture from "../elements/MainPicture";
import CardHolder from "./CardHolder";
import type { Deguzman53 } from "../types/Deguzman53";

type Props = {
  data: Deguzman53 | null;
};
const Main = ({ data }: Props) => {
  console.log("main/data", data);
  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <MainPicture />
      <CardHolder data={data} />
    </>
  );
};

export default Main;
