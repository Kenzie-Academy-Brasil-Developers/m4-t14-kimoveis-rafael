import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./Err";
import {
  CategoryRoutes,
  LoginRoutes,
  RealEstateRoute,
  UsersRoutes,
} from "./Routes";

const app: Application = express();

app.use(express.json());
app.use("/users", UsersRoutes);
app.use("/login", LoginRoutes);
app.use("/categories", CategoryRoutes);
app.use("/realState", RealEstateRoute);

app.use(handleErros);

export default app;
