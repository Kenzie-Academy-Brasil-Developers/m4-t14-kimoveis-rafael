import { Router } from "express";
import {
  realEstateControllers,
  realEstateListControllers,
} from "../../Controllers";
import {
  checkAdmMiddleware,
  checkCategoryNameMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { RealEstateSchema } from "../../Schemas";

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
