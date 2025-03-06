import React from "react";
import { Coins } from "../helpers/types";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const CardCurrency: React.FC<{currency:Coins}> = ({currency}) => {
  return (
    <div>
      <p>{currency.name}</p>
      <p>{currency.ticker}</p>
      <p>{currency.price}</p>
      <p>{currency.amount}</p>
      <button>
        <RiPencilFill />
      </button>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CardCurrency;
