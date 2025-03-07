import { ErrorMessage, Field, Form } from "formik";
import React from "react";

import {
  InputContainer,
  Label,
  ErrorText,
  Button,
  FormContainer,
  ContainerButton,
} from "./StyledFormRegister";

const FormRegister: React.FC<{ formikProps: any; error: string | null }> = ({
  error,
  formikProps,
}) => {
  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <Label htmlFor="name">Nombre completo:</Label>
          <Field
            type="text"
            name="name"
            placeholder="Juan Perez"
            className={`
             ${
               (formikProps.errors.name && formikProps.touched.name) || error
                 ? "error"
                 : ""
             } input`}
          />
          <ErrorText>
            <ErrorMessage name="name" />
          </ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">Email:</Label>
          <Field
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className={`
              ${
                (formikProps.errors.email && formikProps.touched.email) || error
                  ? "error"
                  : ""
              } input`}
          />
          <ErrorText>
            <ErrorMessage name="email" />
          </ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Contraseña:</Label>
          <Field
            type="password"
            name="password"
            placeholder="*********"
            className={`
              ${
                (formikProps.errors.password && formikProps.touched.password) ||
                error
                  ? "error"
                  : ""
              } input`}
          />
          <ErrorText>
            <ErrorMessage name="password" />
          </ErrorText>
        </InputContainer>

        {error && <ErrorText className="text-red-600">¡{error}!</ErrorText>}

        <ContainerButton>
          <Button type="submit">Registrarse</Button>
        </ContainerButton>
      </Form>
    </FormContainer>
  );
};

export default FormRegister;
