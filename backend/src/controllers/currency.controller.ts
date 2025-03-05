import { Request, Response } from "express";
import { catchedController } from "../utils/catchedControllers";

export const handleGetCoins = catchedController(
  async (req: Request, res: Response) => {
    const coins = await getCoins();
    res.status(200).send(coins);
  }
);
export const handlePostCoin = catchedController(
  async (req: Request, res: Response) => {
    const { name, ticker, price, amount } = req.body;
    const newCoin = await postCoin({ name, ticker, price, amount });
    res.status(201).send(newCoin);
  }
);

export const handlePutCoin = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const coinUpdate = await putCoin({id});
    res.status(200).send(coinUpdate);
  }
);

export const handleDeleteCoin = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const coinDelete = await deleteCoin({id});
    res.status(200).send(coinDelete);
  }
);
