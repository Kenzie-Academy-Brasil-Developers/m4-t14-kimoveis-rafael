import { Request, Response } from "express";
import { loginService } from "../../service";

const loginControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: string = await loginService(req.body);

  return res.status(200).json({ token: token });
};

export default loginControllers;
