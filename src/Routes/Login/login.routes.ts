import { Router } from "express";
import { loginControllers } from "../../controllers";
import { ensureEntityData } from "../../middlewares";
import { LoginUsers } from "../../schemas";

const LoginRoutes: Router = Router();

LoginRoutes.post("", ensureEntityData(LoginUsers), loginControllers);

export default LoginRoutes;
