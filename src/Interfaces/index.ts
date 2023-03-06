import { ICreateUser, IReturnUser, IUpdateUser, Repo } from "./users/user";
import {
  ICategories,
  IReturnCategories,
  RepoCategories,
} from "./categories/categories";
import ILogin from "./login/login";
import {
  IRealEstateSchema,
  IReturnEstateSchema,
  RepoEstate,
  IEState,
  IRealEstateResponse,
  IRealEstateReturn,
} from "./realState/realState";
import {
  IReturnAddressSchema,
  IAddressSchema,
  RepoAdd,
} from "./address/address";
import { ISchedule, IReturnSchedule, RepoSche } from "./schedules/schedules.";

export {
  ICreateUser,
  IRealEstateReturn,
  IReturnUser,
  IUpdateUser,
  Repo,
  ILogin,
  ICategories,
  IReturnCategories,
  RepoCategories,
  IRealEstateSchema,
  IReturnEstateSchema,
  RepoEstate,
  IReturnAddressSchema,
  IAddressSchema,
  IEState,
  IRealEstateResponse,
  ISchedule,
  IReturnSchedule,
  RepoSche,
  RepoAdd,
};
