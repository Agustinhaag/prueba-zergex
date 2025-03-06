import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import store from "./store";
import { setUserData, setToken } from "./userSlice";
import { useUserData } from "../helpers/fetchDataUser";

interface StoreWithAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<StoreWithAuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_URL;
  const token = Cookies.get("token");
  if (!token) {
    return <>{children}</>;
  }
  const { data } = useUserData(token!, url);

  useEffect(() => {
    if (token && data) {
      dispatch(setUserData(data));
      dispatch(setToken(token));
    }
  }, [data, dispatch, token]);

  return <>{children}</>;
};

const Providers: React.FC<StoreWithAuthProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default Providers;
