import { ErrorMessage, Field, Form } from "formik";
import React from "react";
import {
  Button,
  ContainerButton,
  ErrorText,
  FormContainer,
  InputContainer,
  Label,
} from "./StyledFormRegister";

const FormLogin: React.FC<{ formikProps: any; error: string | null }> = ({
  error,
  formikProps,
}) => {
  return (
    <FormContainer>
      <Form>
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

        {error && <ErrorText>¡{error}!</ErrorText>}

        <ContainerButton>
          <Button type="submit">Iniciar sesión</Button>
        </ContainerButton>
      </Form>
    </FormContainer>
  );
};

export default FormLogin;
