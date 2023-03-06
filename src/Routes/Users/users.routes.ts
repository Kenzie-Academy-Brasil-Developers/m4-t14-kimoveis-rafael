import { Router } from "express";
import {
  createUsersControllers,
  deleteUserControllers,
  listAllUsersControllers,
  updateUserControllers,
} from "../../controllers";
import {
  checkAdmMiddleware,
  checkEmailMiddleware,
  checkIdUserMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { CreatUSers, UpdateUsers } from "../../schemas";

const UsersRoutes: Router = Router();

UsersRoutes.post(
  "",
  ensureEntityData(CreatUSers),
  checkEmailMiddleware,
  createUsersControllers
);

UsersRoutes.get("", checkToken, checkAdmMiddleware, listAllUsersControllers);

UsersRoutes.patch(
  "/:id",
  ensureEntityData(UpdateUsers),
  checkIdUserMiddleware,
  checkEmailMiddleware,
  checkToken,
  updateUserControllers
);

UsersRoutes.delete(
  "/:id",
  checkIdUserMiddleware,
  checkToken,
  deleteUserControllers
);

export default UsersRoutes;
