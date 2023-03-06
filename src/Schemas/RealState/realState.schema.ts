import { z } from "zod";
import { AddressSchema, ReturnAddressSchema } from "../Address/addrress.schema";
import { CategoriesSchema } from "../Categories/categories.schema";

const RealEstateSchema = z.object({
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: AddressSchema,
  categoryId: z.number(),
});

const ReturnStateSchema = RealEstateSchema.extend({
  id: z.number(),
  updatedAt: z.date().or(z.string()),
  createdAt: z.date().or(z.string()),
});

const ReturnSchemaEstateGet = z.object({
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: ReturnAddressSchema,
  sold: z.boolean(),
  id: z.number(),
  updatedAt: z.date().or(z.string()),
  createdAt: z.date().or(z.string()),
});

const RealEstateReformSchema = RealEstateSchema.omit({
  address: true,
  categoryId: true,
});

const RealEStateResponse = RealEstateSchema.extend({
  category: CategoriesSchema,
}).omit({
  categoryId: true,
});

export {
  RealEstateSchema,
  ReturnStateSchema,
  RealEstateReformSchema,
  RealEStateResponse,
  ReturnSchemaEstateGet,
};
