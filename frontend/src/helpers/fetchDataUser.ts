import { useQuery } from "@tanstack/react-query";
import { IUser } from "./types";

export const fetchDataUserByID = async (
  token: string,
  url: string | undefined,
  id: string
): Promise<IUser> => {
  try {
    const response = await fetch(`${url}/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al hacer la petición: ${response.status}`);
    }

    const data: IUser = await response.json();
    return data;
  } catch (error) {
    console.error("Error al recuperar la información del user:", error);
    throw error;
  }
};

// Función que obtiene el userId del token
const decodeJWT = (token: string): string | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Token inválido");
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    const decodedPayload = JSON.parse(atob(base64));
    return decodedPayload.userId || null;
  } catch (error) {
    console.error("Error decodificando el token:", error);
    return null;
  }
};

// Hook para obtener los datos del usuario
export const useUserData = (token: string, url: string | undefined) => {
  const userId = decodeJWT(token);

  if (!userId) {
    throw new Error("El token no contiene un userId válido");
  }

  return useQuery<IUser, Error>({
    queryKey: ["user", userId], 
    queryFn: () => fetchDataUserByID(token, url, userId),
    enabled: !!userId, 
    staleTime: 60 * 60 * 1000, 
    retry: 2, 
  });
};
