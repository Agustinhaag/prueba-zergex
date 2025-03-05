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
    const { email, password } = req.body;
    const newUser = await registerUserService({
      email,
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
    res
      .status(201)
      .send({ token: data.token, login: true, userStatus: data.user.status });
  }
);

export const getUserById = catchedController(
  async (req: Request, res: Response): Promise<any> => {
    const id = Number(req.params.id);
    const user: User = await findUserById(id);
    res.status(200).json(user);
  }
);
