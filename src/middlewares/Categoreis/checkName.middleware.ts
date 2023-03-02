import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../Err/error";
import { RepoCategories } from "../../Interfaces";

const CheckNameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);
  const name: string = req.body.name;

  const checkName: Category | null = await UseRepository.findOne({
    where: {
      name: name,
    },
  });

  if (checkName) {
    throw new AppError("Category already exists", 409);
  }

  next();
};

export default CheckNameMiddleware;
