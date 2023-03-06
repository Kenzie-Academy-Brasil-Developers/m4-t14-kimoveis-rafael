import { Request, Response } from "express";
import { RealEstate } from "../../entities";
import { IRealEstateReturn } from "../../Interfaces";
import { CreateStateService, listAllRealEstate } from "../../Service";

const realEstateControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newEstate: RealEstate = await CreateStateService(
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
