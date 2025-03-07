import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import "../App.css";
import { Coins } from "../helpers/types";
import FormCreateCoins from "./FormCreateCoins";
import { Button } from "./StyledFormRegister";
import { ModalContent } from "./CurrencyStyled";

const ModalEditCoins: React.FC<{
  viewEditCoins: boolean;
  setViewEditCoins: React.Dispatch<React.SetStateAction<boolean>>;
  currency: Coins;
}> = ({ viewEditCoins, setViewEditCoins, currency }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  return (
    <CSSTransition
      in={viewEditCoins}
      timeout={900}
      classNames="modal"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="modal-overlay  z-50">
        <div
          className="modal-content"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 10px 30px 0px",

            maxHeight: "85vh",
          }}
        >
          <ModalContent>
            <h3>Editar Criptomoneda</h3>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setViewEditCoins(false);
              }}
              type="button"
              className="button"
            >
              <IoMdClose />
            </Button>
          </ModalContent>

          <div>
            <FormCreateCoins
              currency={currency}
              create={false}
              setViewCreateCoins={setViewEditCoins}
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalEditCoins;
