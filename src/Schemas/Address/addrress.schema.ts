import { Repository } from "typeorm";
import { z } from "zod";
import { Address } from "../../entities";

const AddressSchema = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(8).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const ReturnAddressSchema = AddressSchema.extend({
  id: z.number(),
});

export { ReturnAddressSchema, AddressSchema };
