import { ErrorMessage, Field, Form } from "formik";
import React from "react";

const FormLogin: React.FC<{ formikProps: any; error: string | null }> = ({
  error,
  formikProps,
}) => {
  return (
    <Form className="flex flex-col gap-4 items-start">
      <div className="cont-input">
        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className={
            (formikProps.errors.email && formikProps.touched.email) || error
              ? "error"
              : ""
          }
        />
        <span style={{ color: "red" }}>
          <ErrorMessage name="email" />
        </span>
      </div>
      <div className="cont-input">
        <label htmlFor="password">Contraseña:</label>
        <Field
          type="password"
          name="password"
          placeholder="*********"
          className={
            (formikProps.errors.password && formikProps.touched.password) ||
            error
              ? "error"
              : ""
          }
        />
        <span style={{ color: "red" }}>
          <ErrorMessage name="password" />
        </span>
      </div>

      {error && <p className="text-red-600">¡{error}!</p>}

      <div className="cont-btn flex w-full justify-center mb-5">
        <button
          type="submit"
          className="font-bold bg-none rounded-3xl md:text-base md:py-2 md:px-5 hover:cursor-pointer text-sm py-1.5 px-4"
        >
          Iniciar sesión
        </button>
      </div>
    </Form>
  );
};

export default FormLogin;
