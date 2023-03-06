import { z } from "zod";

const CategoriesSchema = z.object({
  name: z.string(),
});

const ReturnCategorySchema = CategoriesSchema.extend({
  id: z.number(),
});

export { CategoriesSchema, ReturnCategorySchema };
