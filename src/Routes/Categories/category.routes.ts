import { Router } from "express";
import {
  CreateCategoriesControllers,
  ListAllCategoryControllers,
} from "../../Controllers";
import { CheckNameMiddleware, ensureEntityData } from "../../middlewares";
import { CategoriesSchema } from "../../Schemas";

const CategoryRoutes: Router = Router();

CategoryRoutes.post(
  "",
  ensureEntityData(CategoriesSchema),
  CheckNameMiddleware,
  CreateCategoriesControllers
);

CategoryRoutes.get("", ListAllCategoryControllers);

export default CategoryRoutes;
