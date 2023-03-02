import { z } from "zod";

const RealEstateSchema = z.object({
  sold: z.boolean(),
  values: z.number(),
  size: z.number(),
});

const ReturnStateSchema = RealEstateSchema.extend({
  id: z.number(),
  updatedAt: z.date(),
  createdAt: z.date(),
});

export { RealEstateSchema, ReturnStateSchema };
