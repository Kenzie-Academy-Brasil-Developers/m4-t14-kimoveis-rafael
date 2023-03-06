import { Request, Response } from "express";
import { ICategories } from "../../interfaces";
import { createCategory, listAllCategory, listCategoryId } from "../../service";

const createCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: ICategories = await createCategory(req.body!);

  return res.status(201).json(newCategory);
};

const listAllCategoryControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await listAllCategory();

  return res.status(200).json(categories);
};

const listCategoryIdControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const itens = await listCategoryId(Number(req.params.id));

  return res.status(200).json(itens);
};

export {
  createCategoriesControllers,
  listAllCategoryControllers,
  listCategoryIdControllers,
};
