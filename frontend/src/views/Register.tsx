import { Formik, Field, Form, ErrorMessage } from "formik";
import { validarRegister } from "../helpers/validateForms";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../helpers/fetchLogin";
import FormRegister from "../components/FormRegister";

const Register = () => {
  const [error, setError] = useState(null);
  const redirect = useNavigate();
  const url = import.meta.env.VITE_URL;
  const { mutate } = useRegister();
  return (
    <main className="login main bg-cover pb-4">
      <section className="cont-login w-1/2 mx-auto py-2 mt-2 min-w-72 rounded-xl">
        <h1 className="my-3 md:text-3xl text-2xl italic">¡Bienvenido!</h1>
        <h2 className="text-center md:my-4 mx-0  underline-offset-4 text-2xl my-5">
          Registrar usuario
        </h2>
        <div className="cont-form w-3/5 mx-auto mb-4">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validate={validarRegister}
            onSubmit={(values) => {
              mutate(
                {
                  email: values.email,
                  name: values.name,
                  password: values.password,
                  url,
                },
                {
                  onError: (error) => {
                    setError(error.message || "Error al registrar el usuario");
                  },
                  onSuccess: () => {
                    redirect("/");
                  },
                }
              );
            }}
          >
            {(formikProps) => (
              <FormRegister error={error} formikProps={formikProps} />
            )}
          </Formik>

          <p>
            ¿Ya tienes una cuenta?
            <Link to="/" className="no-underline">
              Ingresar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
