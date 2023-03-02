import { Router } from "express";
import { LoginControllers } from "../../Controllers";
import { ensureEntityData } from "../../middlewares";
import { LoginUsers } from "../../Schemas";

const LoginRoutes: Router = Router();

LoginRoutes.post("", ensureEntityData(LoginUsers), LoginControllers);

export default LoginRoutes;
