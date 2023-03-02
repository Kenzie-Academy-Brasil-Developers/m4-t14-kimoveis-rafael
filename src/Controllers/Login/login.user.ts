import { Request, Response } from "express";
import { LoginService } from "../../Service";

const LoginControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: string = await LoginService(req.body);

  return res.status(200).json({ token: token });
};

export default LoginControllers;
