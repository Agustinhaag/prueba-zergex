import styled from "styled-components";

export const Section = styled.section`
  width: 70%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.905);
  border-radius: 12px;
  color: white;
  padding: 5px 0 20px 0;
`;

export const ContainerGralForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
  width: 70%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  font-size: 20px;
  font-weight: 400;
  @media (min-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.875rem;
  }
  text-decoration: 1px underline #4285f4;
  text-underline-offset: 2px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;

  & > form{
   display: flex,
  flex-direction: column,
  justify-content: center,
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputContainerModal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.875rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
`;

export const Button = styled.button`
  background: none;
  border-radius: 8px;
  font-size: 0.875rem;
  width: 100%;
  padding: 12px 0;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background: #4285f4;
  border: none;

  &:hover {
    background: rgb(98, 153, 241);
  }
`;

export const Parrafo = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 7px;
`;
