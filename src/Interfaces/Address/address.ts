import { type } from "os";
import { Repository } from "typeorm";
import { z } from "zod";
import { Address } from "../../entities";
import { ReturnAddressSchema, AddressSchema } from "../../Schemas";

type IReturnAddressSchema = z.infer<typeof ReturnAddressSchema>;
type IAddressSchema = z.infer<typeof AddressSchema>;
type RepoAdd = Repository<Address>;
export { IReturnAddressSchema, IAddressSchema, RepoAdd };
