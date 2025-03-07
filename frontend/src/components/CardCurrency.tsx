import React, { useState } from "react";
import { Coins } from "../helpers/types";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import ModalEditCoins from "./ModalEditCoins";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useDeleteCoins } from "../helpers/fetchCoins";
import { CardCurrencyContainer } from "./CurrencyStyled";

const CardCurrency: React.FC<{ currency: Coins }> = ({ currency }) => {
  const [viewEditCoins, setViewEditCoins] = useState<boolean>(false);
  const token = Cookies.get("token");
  const url = import.meta.env.VITE_URL;
  const { mutate } = useDeleteCoins();
  const toggleMenu = () => {
    setViewEditCoins(!viewEditCoins);
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "¿Está seguro/a de eliminar la moneda?",
      text: "Esta acción es irreversible",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        mutate(
          {
            id: currency.id!,
            url,
            token: token!,
          },
          {
            onError: (error: any) => {
              console.log("Error al eliminar moneda");
            },
            onSuccess: () => {},
          }
        );
        Swal.fire({
          title: "Moneda eliminada",
          text: "¡Se ha eliminado correctamente!",
          icon: "success",
        });
      }
    });
  };
  return (
    <CardCurrencyContainer>
      <div>
        <p>
          <span>Nombre</span>: {currency.name}
        </p>
        <p>
          <span>Ticker</span>: {currency.ticker}
        </p>
        <p>
          <span>Precio</span>: ${currency.price}
        </p>
      </div>
      <div>
        <p>
          <span>Monto</span>: ${currency.amount}
        </p>
        <p>
          <span>Inversión</span>: ${currency.investmentAmount}
        </p>
      </div>
      <div>
        <button className="delete" onClick={handleDelete}>
          <FaTrash />
        </button>
        <button
          className="edit"
          onClick={() => setViewEditCoins(!viewEditCoins)}
        >
          <RiPencilFill />
        </button>
      </div>

      {viewEditCoins && (
        <div
          className="fixed inset-0 bg-black bg-opacity-55 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <ModalEditCoins
        setViewEditCoins={setViewEditCoins}
        viewEditCoins={viewEditCoins}
        currency={currency}
      />
    </CardCurrencyContainer>
  );
};

export default CardCurrency;
