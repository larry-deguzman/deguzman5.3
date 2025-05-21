import { useEffect, useState } from "react";
import type { Deguzman53 } from "../types/GenericTypes";

type Props = {
  url?: string;
};

export function useGetJSON({ url }: Props) {
  const [data, setData] = useState<Deguzman53 | null>(null);
  const urlToFetch = url || "/data/deguzman5.3.json";
  useEffect(() => {
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [urlToFetch]);

  return data;
}
export default useGetJSON;
