import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../../entities";
import { CategoriesSchema, ReturnCategorySchema } from "../../schemas";

type ICategories = z.infer<typeof CategoriesSchema>;
type IReturnCategories = z.infer<typeof ReturnCategorySchema>;
type RepoCategories = Repository<Category>;

export { ICategories, IReturnCategories, RepoCategories };
