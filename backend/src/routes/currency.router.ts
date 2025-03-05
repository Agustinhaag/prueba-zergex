import { Router } from "express";
import checkLogin from "../middlewares/checkLogin.middleware";
import { handleDeleteCoin, handleGetCoins, handlePostCoin, handlePutCoin } from "../controllers/currency.controller";

const currencyRouter = Router();

currencyRouter.get("/", checkLogin, handleGetCoins);
currencyRouter.put("/", checkLogin, handlePutCoin);
currencyRouter.post("/", checkLogin, handlePostCoin);
currencyRouter.delete("/", checkLogin, handleDeleteCoin);

export default currencyRouter;
