import React, { useState } from "react";
import { Coins } from "../helpers/types";
import Cookies from "js-cookie";
import { useCoins } from "../helpers/fetchCoins";
import CardCurrency from "../components/CardCurrency";
import ModalCreateCoins from "../components/ModalCreateCoins";
import { ContainerCards, ContainerGral } from "../components/CurrencyStyled";
import { Button } from "../components/StyledFormRegister";

const Home: React.FC = () => {
  const token = Cookies.get("token");
  const url = import.meta.env.VITE_URL;
  const [viewCreateCoins, setViewCreateCoins] = useState<boolean>(false);
  const { data } = useCoins(token!, url);
  const toggleMenu = () => {
    setViewCreateCoins(!viewCreateCoins);
  };

  return (
    <main>
      <ContainerGral>
        <div className="first-container">
          <h1>Sus criptomonedas</h1>
          <Button onClick={() => setViewCreateCoins(!viewCreateCoins)}>
            Crear moneda
          </Button>
        </div>
        {data && data.length > 0 ? (
          <ContainerCards>
            {data.map((currency: Coins) => {
              return <CardCurrency currency={currency} key={currency.id} />;
            })}
          </ContainerCards>
        ) : (
          <p>No posee criptomonedas actualmente</p>
        )}
      </ContainerGral>
      {viewCreateCoins && (
        <div
          className="fixed inset-0 bg-black bg-opacity-55 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <ModalCreateCoins
        setViewCreateCoins={setViewCreateCoins}
        viewCreateCoins={viewCreateCoins}
      />
    </main>
  );
};

export default Home;
