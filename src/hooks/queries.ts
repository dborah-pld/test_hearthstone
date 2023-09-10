import { useQuery } from "react-query";
import { getCardByName } from "../api/card";

export function useSearchCardByName(name: string) {
  return useQuery({
    queryKey: ["card-search", name],
    queryFn: () => getCardByName(name),
    enabled: !!name,
  });
}
