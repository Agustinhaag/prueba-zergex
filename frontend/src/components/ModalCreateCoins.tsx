import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import "../App.css";
import FormCreateCoins from "./FormCreateCoins";
import { ModalContent } from "./CurrencyStyled";
import { Button } from "./StyledFormRegister";

const ModalCreateCoins: React.FC<{
  viewCreateCoins: boolean;
  setViewCreateCoins: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ viewCreateCoins, setViewCreateCoins }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition
      in={viewCreateCoins}
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
            <h3>Crear Criptomoneda</h3>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setViewCreateCoins(false);
              }}
              type="button"
              className="button"
            >
              <IoMdClose />
            </Button>
          </ModalContent>
          <div>
            <FormCreateCoins
              create={true}
              setViewCreateCoins={setViewCreateCoins}
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalCreateCoins;
