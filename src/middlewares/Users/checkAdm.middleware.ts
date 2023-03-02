import { NextFunction, Request, Response } from "express";
import { AppError } from "../../Err";

const CheckAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.admin) {
    throw new AppError("Sem permisão", 400);
  }

  next();
};

export default CheckAdmMiddleware;
