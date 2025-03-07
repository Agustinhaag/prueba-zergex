import { FormikValues } from "formik";

export const validarRegister = (input: FormikValues): Partial<FormikValues> => {
  const errors: Partial<FormikValues> = {};
  const emailRegex: RegExp = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|-]).+$/;

  if (!input.name) {
    errors.name = "El nombre es requerido";
  }
 
  if (!input.email) {
    errors.email = "El email es requerido";
  }
  
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "El email es inválido";
  }
  if (input.password && !passwordRegex.test(input.password)) {
    errors.password =
      "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caractér especial";
  }
  return errors;
};

export const validarLogin = (input: FormikValues): Partial<FormikValues> => {
  const errors: Partial<FormikValues> = {};
  const emailRegex: RegExp = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!input.email) {
    errors.email = "El email es requerido";
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "El email es inválido";
  }
  return errors;
};

export const validarCurrency = (input: FormikValues): Partial<FormikValues> => {
  const errors: Partial<FormikValues> = {};


  if (!input.name) {
    errors.name = "El nombre es requerido";
  }
  if (!input.ticker) {
    errors.ticker = "El ticker es requerido";
  }
  if (!input.price) {
    errors.price = "El precio es requerido";
  }
  if (!input.amount) {
    errors.amount = "La cantidad es requerida";
  }
 
  return errors;
};