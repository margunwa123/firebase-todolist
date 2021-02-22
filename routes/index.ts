import { Application } from "express";
import hello from "./hello";

function assignRouters(app: Application) {
  app.use("/hello", hello);
}

export { assignRouters };
