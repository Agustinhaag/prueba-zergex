import { Formik } from "formik";
import { validarRegister } from "../helpers/validateForms";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../helpers/fetchLogin";
import FormRegister from "../components/FormRegister";
import { ContainerGralForm, Parrafo, Section, Title } from "../components/StyledFormRegister";

const Register = () => {
  const [error, setError] = useState(null);
  const redirect = useNavigate();
  const url = import.meta.env.VITE_URL;
  const { mutate } = useRegister();
  return (
    <main >
      <Section>
        <Title>
          Registrar usuario
        </Title>
        <ContainerGralForm>
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

          <Parrafo>
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/" className="linkForm">
              Ingresar
            </Link>
          </Parrafo>
        </ContainerGralForm>
      </Section>
    </main>
  );
};

export default Register;
