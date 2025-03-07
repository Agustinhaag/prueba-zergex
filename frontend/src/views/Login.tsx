import { Formik} from "formik";
import { validarLogin } from "../helpers/validateForms";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../helpers/fetchLogin";
import FormLogin from "../components/FormLogin";
import { ContainerGralForm, Parrafo, Section, Title } from "../components/StyledFormRegister";

const Login = () => {
  const redirect = useNavigate();
  const url = import.meta.env.VITE_URL;
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useLogin();

  return (
    <main >
      <Section >
        <Title>
          Inicio de sesión
        </Title>
        <ContainerGralForm>
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
              <FormLogin error={error} formikProps={formikProps} />
            )}
          </Formik>

          <Parrafo>
            <span>¿Aún no tienes una cuenta?</span>
            <Link to="/register" className="linkForm">Registrarse</Link>
          </Parrafo>
        </ContainerGralForm>
      </Section>
    </main>
  );
};

export default Login;
