import { type } from "os";
import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../../entities";
import {
  RealEstateReformSchema,
  RealEStateResponse,
  RealEstateSchema,
  ReturnStateSchema,
  ReturnSchemaEstateGet,
} from "../../Schemas";

type IRealEstateSchema = z.infer<typeof RealEstateReformSchema>;
type IReturnEstateSchema = z.infer<typeof ReturnStateSchema>;
type IRealEstateResponse = z.infer<typeof RealEStateResponse>;
type RepoEstate = Repository<RealEstate>;
type IRealEstateReturn = z.infer<typeof ReturnSchemaEstateGet>;

type IEState = z.infer<typeof RealEstateSchema>;

export {
  IEState,
  IRealEstateSchema,
  IReturnEstateSchema,
  IRealEstateResponse,
  RepoEstate,
  IRealEstateReturn,
};
