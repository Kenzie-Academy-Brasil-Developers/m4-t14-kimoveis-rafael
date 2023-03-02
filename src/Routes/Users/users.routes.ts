import { Router } from "express";
import {
  CreateUsersControllers,
  DeleteUserControllers,
  ListAllUsersControllers,
  UpdateUserControllers,
} from "../../Controllers";
import {
  CheckAdmMiddleware,
  CheckEmailMiddleware,
  CheckIdMiddleware,
  CheckToken,
  ensureEntityData,
} from "../../middlewares";
import { CreatUSers, UpdateUsers } from "../../Schemas";

const UsersRoutes: Router = Router();

UsersRoutes.post(
  "",
  ensureEntityData(CreatUSers),
  CheckEmailMiddleware,
  CreateUsersControllers
);

UsersRoutes.get("", CheckToken, CheckAdmMiddleware, ListAllUsersControllers);

UsersRoutes.patch(
  "/:id",
  ensureEntityData(UpdateUsers),
  CheckIdMiddleware,
  CheckEmailMiddleware,
  CheckToken,
  UpdateUserControllers
);

UsersRoutes.delete(
  "/:id",
  CheckIdMiddleware,
  CheckToken,
  DeleteUserControllers
);

export default UsersRoutes;
