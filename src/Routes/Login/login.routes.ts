import { Router } from "express";
import { loginControllers } from "../../Controllers";
import { ensureEntityData } from "../../middlewares";
import { LoginUsers } from "../../Schemas";

const LoginRoutes: Router = Router();

LoginRoutes.post("", ensureEntityData(LoginUsers), loginControllers);

export default LoginRoutes;
