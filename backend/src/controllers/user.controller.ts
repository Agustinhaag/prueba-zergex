import { Request, Response } from "express";
import { catchedController } from "../utils/catchedControllers";
import {
  findUserById,
  loginUserService,
  registerUserService,
} from "../services/user.service";
import { User } from "../entities/User";

export const userRegister = catchedController(
  async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    const newUser = await registerUserService({
      email,
      name,
      password,
    });
    res.status(201).send({ register: true });
  }
);

export const userLogin = catchedController(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const data: any = await loginUserService({
      email,
      password,
    });
    res.status(201).send(data);
  }
);

export const getUserById = catchedController(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const user: User = await findUserById(id);
    res.status(200).json(user);
  }
);
