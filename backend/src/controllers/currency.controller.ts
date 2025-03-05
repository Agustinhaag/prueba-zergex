import { Request, Response } from "express";
import { catchedController } from "../utils/catchedControllers";
import {
  deleteCoin,
  getCoins,
  postCoin,
  updateCoin,
} from "../services/currency.service";
import { Currency } from "../entities/Currency";

export const handleGetCoins = catchedController(
  async (req: Request, res: Response) => {
    const coins: Currency[] = await getCoins();
    res.status(200).send(coins);
  }
);
export const handlePostCoin = catchedController(
  async (req: Request, res: Response) => {
    const { name, ticker, price, amount } = req.body;
    try {
      const newCoin = await postCoin({ name, ticker, price, amount });
      res.status(201).send(newCoin);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
);

export const handlePutCoin = catchedController(
  async (req: Request, res: Response) => {
    const { id, name, ticker, price, amount } = req.body;
    try {
      const coinUpdate = await updateCoin(id, {
        name,
        ticker,
        price,
        amount,
      });
      res.status(200).send(coinUpdate);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
);

export const handleDeleteCoin = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const coinDelete = await deleteCoin(id);
      res.status(200).send(coinDelete);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
);
