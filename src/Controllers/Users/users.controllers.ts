import { Request, Response } from "express";
import { AppError } from "../../Err";
import { IReturnUser } from "../../Interfaces";
import {
  CreateUsersServices,
  DeleteUSerService,
  ListAllUsersService,
  UpdateUsersService,
} from "../../Service";

const CreateUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await CreateUsersServices(req.body);

  return res.status(201).json(newUser);
};

const ListAllUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: IReturnUser[] = await ListAllUsersService();

  return res.status(200).json(users);
};

const UpdateUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const idUser: number = Number(req.id);

  if (id !== idUser && !req.admin) {
    throw new AppError("Sem Permisão", 401);
  }

  const user: IReturnUser = await UpdateUsersService(req.user, req.body);

  return res.status(200).json(user);
};

const DeleteUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const idUser: number = Number(req.id);

  if (id !== idUser && !req.admin) {
    throw new AppError("Sem Permisão", 401);
  }

  await DeleteUSerService(req.user);

  return res.status(204).send();
};

export {
  CreateUsersControllers,
  ListAllUsersControllers,
  UpdateUserControllers,
  DeleteUserControllers,
};
