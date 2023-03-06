import { Request, Response } from "express";
import { Category } from "../../entities";
import { ICategories } from "../../Interfaces";
import { CreateCategory, ListAllCategory, ListCategoryId } from "../../Service";

const createCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: ICategories = await CreateCategory(req.body!);

  return res.status(201).json(newCategory);
};

const listAllCategoryControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await ListAllCategory();

  return res.status(200).json(categories);
};

const listCategoryIdControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const itens = await ListCategoryId(Number(req.params.id));

  return res.status(200).json(itens);
};

export {
  createCategoriesControllers,
  listAllCategoryControllers,
  listCategoryIdControllers,
};
