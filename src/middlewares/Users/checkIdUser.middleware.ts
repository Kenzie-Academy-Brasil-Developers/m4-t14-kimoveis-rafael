import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../err/error";

const checkIdUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const UseRepository: Repository<User> = AppDataSource.getRepository(User);

  const id: number = Number(req.params.id);
  const idUserToken: number = Number(req.id);

  if (id) {
    const checkId: User | null = await UseRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        schedules: true,
      },
    });

    if (!checkId) {
      throw new AppError("User not found", 404);
    }

    req.user = checkId!;

    next();
  }

  if (idUserToken) {
    const checkId: User | null = await UseRepository.findOne({
      where: {
        id: idUserToken,
      },
      relations: {
        schedules: true,
      },
    });

    if (!checkId) {
      throw new AppError("User not found", 404);
    }

    req.user = checkId!;

    next();
  }
};

export default checkIdUserMiddleware;
