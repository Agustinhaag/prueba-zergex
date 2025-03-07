import { useMutation } from "@tanstack/react-query";
import { setUserData, setToken } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { LoginData, LoginResponse, RegisterData } from "./types";
import Swal from "sweetalert2";

const loginUser = async (userData: LoginData): Promise<LoginResponse> => {
  const { email, password, url } = userData;
  const response = await fetch(`${url}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al hacer login");
  }

  const data: LoginResponse = await response.json();
  return data;
};

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginResponse) => {
      dispatch(setToken(data.token));
      Cookies.set("token", data.token, { expires: 3 });
      dispatch(
        setUserData({ email: data.email, id: data.id, name: data.name })
      );
      Swal.fire({
        title: "Inicio de sesión exitoso",
        text: "Se ha iniciado sesión correctamente.",
        icon: "success",
      });
    },
    onError: (error: any) => {
      console.error("Error al hacer login", error);
    },
  });
};

const registerUser = async (userData: RegisterData): Promise<boolean> => {
  const { email, name, password, url } = userData;
  const response = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar un usuario");
  }

  const data: boolean = await response.json();
  return data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data: boolean) => {
      console.log(data);
      Swal.fire({
        title: "Registro exitoso",
        text: "Se ha registrado correctamente.",
        icon: "success",
      });
    },
    onError: (error: any) => {
      console.error("Error al hacer un registro", error);
    },
  });
};
