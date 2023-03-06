import { NextFunction, Request, Response } from "express";
import { AppError } from "../../err";
import jwt from "jsonwebtoken";

const checkToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  if (token === "Bearer") {
    throw new AppError("Missing Bearer Token", 401);
  }

  token = token?.split(" ")[1];

  jwt.verify(token!, process.env.SECRET_KEY!, (error, decod: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    req.admin = decod.admin;
    req.id = Number(decod.sub);

    next();
  });
};

export default checkToken;
