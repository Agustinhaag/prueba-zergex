import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 4rem;
  align-items: center;
  color: #4285f4;
  padding: 0 7px;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

  & > p {
    font-size: 22px;
  }

  & > div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  & > div > p {
    color: white;
  }
  & > div > a {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #4285f4;
    text-decoration: none;
  }
  & > div > .first {
    color: white;
    background: #4285f4;
  }
  & > div > .first:hover {
    background: rgb(83, 143, 240);
  }
  & > div > .second {
    color: white;
    background: transparent;
  }
  & > div > .second:hover {
    background: #4285f4;
  }
`;

export const ButtonSesion = styled.button`
  border: none;
  color: #4285f4;
  font-size: 30px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  background: transparent;
  &:hover {
    background: #4285f4;
    color: white;
  }
`;

export const ContainerGral = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 0 10px;

  & > .first-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  & > .first-container > h1 {
    color: white;
    font-weight: normal;
    font-size: 30px;
    margin-bottom: 8px;
  }

  & > .first-container > button {
    width: auto;
    padding: 12px;
    margin-bottom: 10px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
  @media (max-width: 703px) {
    justify-content: center;
  }
`;

export const CardCurrencyContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 32%;
  min-width: 334px;
  justify-content: space-between;
  border-radius: 0 15px 0 15px;
  background-color: rgba(19, 18, 18, 0.6);
  font-size: 17px;
  color: white;
  padding: 20px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
    text-align: start;
  }
  & > div > p {
    text-transform: capitalize;
    min-width: 125px;
  }
  & > div > p > span {
    color: #4285f4;
  }
  & div > button {
    border-radius: 8px;
    padding: 7px 8px;
    background: transparent;
    width: 35px;
  }
  & div > .edit {
    border: 1px solid blue;
    color: blue;
  }
  & div > .edit:hover {
    color: white;
    background: blue;
    cursor: pointer;
  }
  & div > .delete {
    border: 1px solid red;
    color: red;
  }
  & div > .delete:hover {
    color: white;
    background: red;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  & > .button {
    width: 25px;
    height: 25px;
    padding: 0;
    background: #4285f4;
  }
  & > h3 {
    margin-bottom: 10px;
  }
`;

export const ButtonModal = styled.button`
  background: none;
  border-radius: 8px;
  font-size: 0.875rem;
  width: 100% !important;
  padding: 12px 0 !important;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background: #4285f4 !important;
  border: none;

  &:hover {
    background: rgb(98, 153, 241) !important;
  }
`;
