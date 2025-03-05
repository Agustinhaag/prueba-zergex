import { Router } from "express";
import usersRouter from "./user.router";

import currencyRouter from "./currency.router";

const router = Router();

router.use("/", usersRouter);
router.use("/currency", currencyRouter);

export default router;
