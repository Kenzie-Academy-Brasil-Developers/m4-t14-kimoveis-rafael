import { ICreateUser, IReturnUser, IUpdateUser, Repo } from "./Users/user";
import {
  ICategories,
  IReturnCategories,
  RepoCategories,
} from "./Categories/categories";
import ILogin from "./Login/login";
import {
  IRealEstateSchema,
  IReturnEstateSchema,
  RepoEstate,
  IEState,
  IRealEstateResponse,
  IRealEstateReturn,
} from "./RealState/realState";
import {
  IReturnAddressSchema,
  IAddressSchema,
  RepoAdd,
} from "./Address/address";
import { ISchedule, IReturnSchedule, RepoSche } from "./Schedules/schedules.";

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
