import { currencyModel } from "../config/DataConfig";
import { CurrencyDto } from "../dto/currencyDto";
import { ClientError } from "../utils/errors";

export const getCoins = async () => {
  try {
    const coins = await currencyModel.find();
    return coins;
  } catch (error) {
    throw new ClientError(
      "No se pudo recuperar la informaciòn de todas las criptomonedas",
      500
    );
  }
};

export const postCoin = async (currency: CurrencyDto) => {
  try {
    const verifyCoin = await currencyModel.findOneBy({ name: currency.name });
    if (verifyCoin) {
      throw new ClientError("Ya existe una criptomoneda con ese nombre", 400);
    }
    const newCurrency = currencyModel.create(currency);
    await currencyModel.save(newCurrency);
    return "Creación exitosa";
  } catch (error) {
    throw new ClientError("No se pudo crear la criptomoneda", 500);
  }
};

export const updateCoin = async (id: number) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const deleteCoin = async (id: number) => {
  try {
    const currency = await currencyModel.findOneBy({ id });
    if (!currency) {
      throw new ClientError("La moneda no está registrada", 404);
    }
    const currencyDelete = await currencyModel.delete(id);
    return "Moneda eliminada exitosamente";
  } catch (error) {
    console.log(error);
  }
};
