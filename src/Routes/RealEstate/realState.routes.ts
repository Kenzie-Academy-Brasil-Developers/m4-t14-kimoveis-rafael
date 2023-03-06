import { Router } from "express";
import {
  realEstateControllers,
  realEstateListControllers,
} from "../../controllers";
import {
  checkAdmMiddleware,
  checkCategoryNameMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { RealEstateSchema } from "../../schemas";

const RealEstateRoute: Router = Router();

RealEstateRoute.post(
  "",
  checkToken,
  checkAdmMiddleware,
  ensureEntityData(RealEstateSchema),
  checkCategoryNameMiddleware,
  realEstateControllers
);

RealEstateRoute.get("", realEstateListControllers);

export default RealEstateRoute;
