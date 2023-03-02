import { Request, Response } from "express";
import { Category } from "../../entities";
import { ICategories } from "../../Interfaces";
import { CreateCategory, ListAllCategory } from "../../Service";

const CreateCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: ICategories = await CreateCategory(req.body!);

  return res.status(201).json(newCategory);
};

const ListAllCategoryControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: Category[] = await ListAllCategory();

  return res.status(200).json(categories);
};

export { CreateCategoriesControllers, ListAllCategoryControllers };
