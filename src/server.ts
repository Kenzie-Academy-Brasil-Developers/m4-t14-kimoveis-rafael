import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connect!");
    app.listen(3000, () => {
      console.log("Sever is running");
    });
  })
  .catch((err: any) => console.log(err));
