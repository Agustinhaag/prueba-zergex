import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validarCurrency } from "../helpers/validateForms";
import { useCreateCoins } from "../helpers/fetchCoins";
import Cookies from "js-cookie";
import { Coins } from "../helpers/types";
import {
  ContainerButton,
  ErrorText,
  FormContainer,
  InputContainerModal,
  Label,
} from "./StyledFormRegister";
import { ButtonModal } from "./CurrencyStyled";

const FormCreateCoins: React.FC<{
  currency?: Coins;
  create: boolean;
  setViewCreateCoins: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ currency, create, setViewCreateCoins }) => {
  const url = import.meta.env.VITE_URL;
  const token = Cookies.get("token") || "";
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useCreateCoins();
  return (
    <Formik
      initialValues={{
        name: currency ? currency.name : "",
        ticker: currency ? currency.ticker : "",
        price: currency ? currency.price : 0,
        amount: currency ? currency.amount : 0,
      }}
      validate={validarCurrency}
      onSubmit={(values) => {
        mutate(
          {
            currency: values,
            url,
            token,
            create,
          },
          {
            onError: (error: any) => {
              setError(error.message || "Error al iniciar sesión");
            },
            onSuccess: () => {
              setViewCreateCoins(false);
            },
          }
        );
      }}
    >
      {(formikProps) => (
        <FormContainer>
          <Form>
            <InputContainerModal>
              <Label htmlFor="name">Nombre:</Label>
              <Field
                type="text"
                name="name"
                placeholder="Bitcoin"
                className={`
                  ${
                    (formikProps.errors.name && formikProps.touched.name) ||
                    error
                      ? "error"
                      : ""
                  } input`}
              />
              <ErrorText>
                <ErrorMessage name="name" />
              </ErrorText>
            </InputContainerModal>
            <InputContainerModal>
              <Label htmlFor="ticker">Ticker:</Label>
              <Field
                type="text"
                name="ticker"
                placeholder="Ticker"
                className={`
                  ${
                    (formikProps.errors.ticker && formikProps.touched.ticker) ||
                    error
                      ? "error"
                      : ""
                  } input`}
              />
              <ErrorText>
                <ErrorMessage name="ticker" />
              </ErrorText>
            </InputContainerModal>
            <InputContainerModal>
              <Label htmlFor="price">Precio:</Label>
              <Field
                type="number"
                name="price"
                placeholder="1000"
                className={`
                  ${
                    (formikProps.errors.price && formikProps.touched.price) ||
                    error
                      ? "error"
                      : ""
                  } input`}
              />
              <ErrorText>
                <ErrorMessage name="price" />
              </ErrorText>
            </InputContainerModal>
            <InputContainerModal>
              <Label htmlFor="amount">Cantidad:</Label>
              <Field
                type="number"
                name="amount"
                placeholder="2"
                className={`
                  ${
                    (formikProps.errors.amount && formikProps.touched.amount) ||
                    error
                      ? "error"
                      : ""
                  } input`}
              />
              <ErrorText>
                <ErrorMessage name="amount" />
              </ErrorText>
            </InputContainerModal>
            {error && <ErrorText>¡{error}!</ErrorText>}

            <ContainerButton>
              <ButtonModal type="submit">{create ? "Crear": "Editar"} moneda</ButtonModal>
            </ContainerButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default FormCreateCoins;
