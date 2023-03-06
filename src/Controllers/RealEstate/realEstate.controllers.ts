import { Request, Response } from "express";
import { RealEstate } from "../../entities";
import { IRealEstateReturn } from "../../interfaces";
import { createStateService, listAllRealEstate } from "../../service";

const realEstateControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newEstate: RealEstate = await createStateService(
    req.body,
    req.category
  );

  return res.status(201).json(newEstate);
};

const realEstateListControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: IRealEstateReturn[] = await listAllRealEstate();

  return res.status(200).json(realEstate);
};

export { realEstateControllers, realEstateListControllers };
