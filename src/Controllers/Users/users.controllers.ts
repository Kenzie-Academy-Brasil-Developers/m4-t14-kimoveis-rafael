import { Request, Response } from "express";
import { AppError } from "../../err";
import { IReturnUser } from "../../interfaces";
import {
  createUsersServices,
  deleteUSerService,
  listAllUsersService,
  updateUsersService,
} from "../../service";

const createUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUsersServices(req.body);

  return res.status(201).json(newUser);
};

const listAllUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: IReturnUser[] = await listAllUsersService();

  return res.status(200).json(users);
};

const updateUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const idUser: number = Number(req.id);

  const user: IReturnUser = await updateUsersService(
    req.user,
    req.body,
    id,
    idUser,
    req.admin
  );

  return res.status(200).json(user);
};

const deleteUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.admin) {
    throw new AppError("Insufficient permission", 403);
  }

  await deleteUSerService(req.user);

  return res.status(204).send();
};

export {
  createUsersControllers,
  listAllUsersControllers,
  updateUserControllers,
  deleteUserControllers,
};
