import { Repository } from "typeorm";
import { z } from "zod";
import { Address } from "../../entities";
import { ReturnAddressSchema, AddressSchema } from "../../schemas";

type IReturnAddressSchema = z.infer<typeof ReturnAddressSchema>;
type IAddressSchema = z.infer<typeof AddressSchema>;
type RepoAdd = Repository<Address>;
export { IReturnAddressSchema, IAddressSchema, RepoAdd };
