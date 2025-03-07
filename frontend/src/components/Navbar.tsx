import React from "react";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../helpers/types";
import Swal from "sweetalert2";
import { logout } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { ButtonSesion, Nav } from "./CurrencyStyled";

const Navbar: React.FC = () => {
  const dataUser: IUser = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const router = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "¿Está seguro/a de cerrar sesión?",
      text: "Deberá volver a ingresar para operar",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión.",
      cancelButtonText: "Cancelar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(logout());
        router("/");
        Swal.fire({
          title: "Sesión cerrada",
          text: "¡Vuelva a ingresar para operar!",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Nav>
        <p>Cripto-Tech</p>
        <div>
          {dataUser ? (
            <>
              <p>{dataUser.name}</p>
              <ButtonSesion onClick={handleLogout}>
                <HiMiniArrowRightStartOnRectangle />
              </ButtonSesion>
            </>
          ) : (
            <>
            <Link to="/" className="first">Login</Link>
            <Link to="/register" className="second">Register</Link>
            </>
          )}
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
