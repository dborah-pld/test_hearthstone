import axios from "axios";
import { Card } from "../utils/interface";

export async function getCardByName(name: string): Promise<Card[]> {
  const { data } = await axios.request({
    method: "GET",
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}`,
    params: {
      locale: "frFR",
    },
    headers: {
      "X-RapidAPI-Key": "d2b5ca8908msh24866bed7a4071ap1692abjsn8b1795b01f30",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  });

  return data;
}
