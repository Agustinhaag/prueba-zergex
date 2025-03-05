import { Router } from "express";
import checkLogin from "../middlewares/checkLogin.middleware";

const currencyRouter = Router();

currencyRouter.get("/", checkLogin);
currencyRouter.put("/", checkLogin);
currencyRouter.post("/", checkLogin);
currencyRouter.delete("/", checkLogin);

export default currencyRouter;
