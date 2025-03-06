import { useQuery } from "@tanstack/react-query";
import { Coins } from "./types";

const fetchCoins = async (token: string, url: string): Promise<Coins[] | undefined> => {
  try {
    const response = await fetch(`${url}/currency`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const coins = await response.json();
    return coins;
  } catch (error) {
    console.log(error);
  }
};

export const useCoins = (token: string, url: string) => {
  return useQuery({
    queryKey: ["coins", token, url],
    queryFn: () => fetchCoins(token, url),
    enabled: !!token,
  });
};
