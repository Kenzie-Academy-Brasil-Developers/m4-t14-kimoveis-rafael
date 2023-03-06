import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../err/error";
import { RepoCategories } from "../../Interfaces";

const checkCategoryNameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);
  const name: string = req.body.name;
  const id: number = Number(req.body.categoryId) || Number(req.params.id);

  if (name) {
    const checkName: Category | null = await UseRepository.findOne({
      where: {
        name: name,
      },
    });

    if (checkName) {
      throw new AppError("Category already exists", 409);
    }
  }
  if (id) {
    const checkId: Category | null = await UseRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!checkId) {
      throw new AppError("Category not found", 404);
    }

    req.category = checkId!;
  }

  next();
};

export default checkCategoryNameMiddleware;
