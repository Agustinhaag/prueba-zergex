import { Formik, Field, Form, ErrorMessage } from "formik";
import { validarLogin } from "../helpers/validateForms";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { useLogin } from "../helpers/fetchLogin";
import FormLogin from "../components/FormLogin";

const Login = () => {
  const redirect = useNavigate();
  const url = import.meta.env.VITE_URL;
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useLogin();

  return (
    <main className="login main bg-cover pb-4">
      <section className="cont-login w-5/12 mx-auto py-2 mt-2 rounded-xl min-w-48">
        <h2 className="text-center md:my-4 mx-0 md:text-3xl underline-offset-4 text-2xl my-5">
          Inicio de sesión
        </h2>
        <div className="cont-form w-4/5 mx-auto mb-4">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={validarLogin}
            onSubmit={(values) => {
              mutate(
                {
                  email: values.email,
                  password: values.password,
                  url,
                },
                {
                  onError: (error) => {
                    setError(error.message || "Error al iniciar sesión");
                  },
                  onSuccess: () => {
                    redirect("/home");
                  },
                }
              );
            }}
          >
            {(formikProps) => (
            <FormLogin error={error} formikProps={formikProps}/>
            )}
          </Formik>

          <p>
            ¿Aún no tienes una cuenta?{" "}
            <Link to="/register" className="no-underline">
              Registrarse
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
