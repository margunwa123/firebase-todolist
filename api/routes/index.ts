import { Application } from "express";
import hello from "./hello";
import { Router } from "express";
import todo from "./todo";

function assignRoute(app: Application, route: string, router: Router) {
  app.use(`/api${route}`, router);
}

function assignRouters(app: Application) {
  assignRoute(app, "/hello", hello);
  assignRoute(app, "/todo", todo);
}

export { assignRouters };
