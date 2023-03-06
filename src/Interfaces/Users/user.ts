import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { User } from "../../entities";
import { CreatUSers, ReturnUsers } from "../../schemas";

type ICreateUser = z.infer<typeof CreatUSers>;
type IReturnUser = z.infer<typeof ReturnUsers>;
type Repo = Repository<User>;
type IUpdateUser = DeepPartial<ICreateUser>;

export { ICreateUser, IReturnUser, Repo, IUpdateUser };
