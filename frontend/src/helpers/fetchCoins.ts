import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Coins } from "./types";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const fetchCoins = async (
  token: string,
  url: string
): Promise<Coins[] | undefined> => {
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

const createCoins = async (data: {
  currency: Coins;
  url: string;
  token: string;
  create: boolean;
}): Promise<Coins> => {
  const { amount, name, price, ticker } = data.currency;
  const response = await fetch(`${data.url}/currency`, {
    method: data.create ? "POST" : "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: data.token,
    },
    body: JSON.stringify({ amount, name, price, ticker }),
  });

  if (!response.ok) {
    throw new Error("Error al crear la moneda");
  }
  Swal.fire({
    title: `Moneda ${data.create ? "creada" : "editada"} exitosamente`,
    text: `Se ha ${data.create ? "creado" : "editado"} correctamente.`,
    icon: "success",
  });

  const currency: Coins = await response.json();
  return currency;
};

export const useCreateCoins = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCoins,
    onSuccess: (data: Coins, variables) => {
      console.log(data)
      queryClient.refetchQueries({
        queryKey: ["coins", variables.token, variables.url],
        exact: true,
      });
      console.log("Operación realizada exitosamente");
    },
    onError: (error: any) => {
      console.error("Error al crear la moneda", error);
    },
  });
};

const deleteCoins = async (data: {
  id: string;
  url: string;
  token: string;
}): Promise<void> => {
  const { id } = data;
  const response = await fetch(`${data.url}/currency`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: data.token,
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("Error al eliminar la moneda");
  }
};

export const useDeleteCoins = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCoins,
    onSuccess: (data: void, variables) => {
      console.log(data)
      queryClient.refetchQueries({
        queryKey: ["coins", variables.token, variables.url],
        exact: true,
      });
    },
    onError: (error: any) => {
      console.error("Error al eliminar la moneda", error);
    },
  });
};
