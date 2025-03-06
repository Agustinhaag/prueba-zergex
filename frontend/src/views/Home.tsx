import React from "react";
import { useSelector } from "react-redux";
import { Coins, IUser } from "../helpers/types";
import Cookies from "js-cookie";
import { useCoins } from "../helpers/fetchCoins";
import CardCurrency from "../components/CardCurrency";

const Home: React.FC = () => {
  const token = Cookies.get("token");
  const dataUser: IUser = useSelector((state: any) => state.user.user);
  const url = import.meta.env.VITE_URL;

  const { data } = useCoins(token!, url);

  return (
    <main>
      {data && data.length > 0 ? (
        <section>
          <h1>Sus criptomonedas</h1>
          <button>Crear moneda</button>
          <div>
            {data.map((currency: Coins) => {
              return <CardCurrency currency={currency} key={currency.id} />;
            })}
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Home;
