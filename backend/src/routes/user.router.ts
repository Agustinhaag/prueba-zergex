import { Router } from "express";
import {
  validateUserRegister,
  validateUserExists,
} from "../middlewares/userRegister.middleware";
import {
  getUserById,
  userLogin,
  userRegister,
} from "../controllers/user.controller";
import { validateLogin } from "../middlewares/userLogin.middleware";
import checkLogin from "../middlewares/checkLogin.middleware";

const usersRouter = Router();

usersRouter.post(
  "/signup",
  validateUserRegister,
  validateUserExists,
  userRegister
);

usersRouter.post("/signin", validateLogin, userLogin);

usersRouter.get("/users/:id", checkLogin, getUserById);

export default usersRouter;
