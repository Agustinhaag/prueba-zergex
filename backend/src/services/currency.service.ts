import { currencyModel } from "../config/DataConfig";
import { CurrencyDto } from "../dto/currencyDto";
import { ClientError } from "../utils/errors";

export const getCoins = async () => {
  try {
    const coins = await currencyModel.find();
    const coinsWithInvestment = coins.map((coin) => ({
      ...coin,
      investmentAmount: coin.investmentAmount,
    }));
    return coinsWithInvestment;
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
    return newCurrency;
  } catch (error) {
    throw new ClientError("No se pudo crear la criptomoneda", 500);
  }
};

export const updateCoin = async (id: string, currency: CurrencyDto) => {
  try {
    const existingCurrency = await currencyModel.findOneBy({ id });
    if (!existingCurrency) {
      throw new ClientError("La moneda no está registrada", 404);
    }

    if (currency.name) existingCurrency.name = currency.name;
    if (currency.ticker) existingCurrency.ticker = currency.ticker;
    if (currency.price !== undefined) existingCurrency.price = currency.price;
    if (currency.amount !== undefined)
      existingCurrency.amount = currency.amount;

    await currencyModel.save(existingCurrency);

    return existingCurrency;
  } catch (error) {
    throw new ClientError("No se pudo editar la criptomoneda", 500);
  }
};

export const deleteCoin = async (id: string) => {
  try {
    const currency = await currencyModel.findOneBy({ id });
    if (!currency) {
      throw new ClientError("La moneda no está registrada", 404);
    }
    const currencyDelete = await currencyModel.delete(id);
    return "Moneda eliminada exitosamente";
  } catch (error) {
    throw new ClientError("No se pudo eliminar la criptomoneda", 500);
  }
};
