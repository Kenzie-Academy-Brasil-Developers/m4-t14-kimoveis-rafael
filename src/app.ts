import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./err";
import {
  CategoryRoutes,
  LoginRoutes,
  RealEstateRoute,
  UsersRoutes,
} from "./Routes";
import ScheduleRoute from "./Routes/schedules/schedules.service";

const app: Application = express();

app.use(express.json());
app.use("/users", UsersRoutes);
app.use("/login", LoginRoutes);
app.use("/categories", CategoryRoutes);
app.use("/realEstate", RealEstateRoute);
app.use("/schedules", ScheduleRoute);

app.use(handleErros);

export default app;
