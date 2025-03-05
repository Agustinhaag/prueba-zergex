import { userModel } from "../config/DataConfig";
import { ClientError } from "../utils/errors";
import {
  checkPasswordService,
  createCredentialService,
} from "./credential.service";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import { LoginUserDto } from "../dto/usersDto";
import { User } from "../entities/User";

export const checkUserExists = async (email: string): Promise<boolean> => {
  const user = await userModel.findOneBy({ email });
  return !!user;
};

export const registerUserService = async (
  registerUserDto: LoginUserDto
): Promise<string> => {
  try {
    const user = userModel.create(registerUserDto);
    const credential = await createCredentialService({
      password: registerUserDto.password,
    });

    user.credential = credential;
    await userModel.save(user);

    return "Registro exitoso";
  } catch (error: any) {
    console.error("Error al registrar usuario");

    // Si es un error de validación (específicamente de la contraseña)
    if (error instanceof ClientError) {
      return Promise.reject(new ClientError(error.message, 400));
    }

    // Si no es un error de validación, es un error interno
    throw new ClientError("No se pudo crear el usuario", 500);
  }
};

export const loginUserService = async (
  loginUserDto: LoginUserDto
): Promise<any> => {
  try {
    const user: User | null = await userModel.findOne({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!user) {
      throw new ClientError("El usuario no está registrado", 404);
    }

    // Verifica la contraseña
    const isPasswordValid = await checkPasswordService(
      loginUserDto.password,
      user.credential.password
    );
    if (!isPasswordValid) {
      throw new ClientError("Credenciales incorrectas", 400);
    }

    // Genera el token JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    return { token, user };
  } catch (error) {
    console.error("Error en loginUserService:", error);
    throw error; // Lanza el error para que se maneje en un nivel superior
  }
};

export const findUserById = async (id: number): Promise<User> => {
  try {
    const user = await userModel.findOne({
      where: { id },
    });
    if (!user) {
      throw new ClientError("El usuario no existe", 404);
    }
    return user;
  } catch (error) {
    throw new ClientError("Error al obtener el usuario", 500);
  }
};
