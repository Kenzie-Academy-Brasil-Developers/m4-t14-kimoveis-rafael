import { Router } from "express";
import {
  createCategoriesControllers,
  listAllCategoryControllers,
  listCategoryIdControllers,
} from "../../Controllers";
import {
  checkAdmMiddleware,
  checkCategoryNameMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { CategoriesSchema } from "../../Schemas";

const CategoryRoutes: Router = Router();

CategoryRoutes.post(
  "",
  checkToken,
  ensureEntityData(CategoriesSchema),
  checkAdmMiddleware,
  checkCategoryNameMiddleware,
  createCategoriesControllers
);

CategoryRoutes.get("", listAllCategoryControllers);
CategoryRoutes.get(
  "/:id/realEstate",
  checkCategoryNameMiddleware,
  listCategoryIdControllers
);

export default CategoryRoutes;
