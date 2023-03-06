import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureEntityData =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.body);
    const validate = schema.parse(req.body);

    req.body = validate;

    return next();
  };

export default ensureEntityData;
