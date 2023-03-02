import { type } from "os";
import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../../entities";
import { RealEstateSchema, ReturnStateSchema } from "../../Schemas";

type IRealEstateSchema = z.infer<typeof RealEstateSchema>;
type IReturnEstateSchema = z.infer<typeof ReturnStateSchema>;
type RepoEstate = Repository<RealEstate>;

export { IRealEstateSchema, IReturnEstateSchema, RepoEstate };
