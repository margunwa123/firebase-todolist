import express, { Application, Request, Response } from "express";
import { assignRouters } from "@/api/routes";
import database from "@/database";
import path from "path";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// SETUP
(function () {
  // template engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // router setup
  assignRouters(app);

  // express static setup
  app.use(express.static("public"));
})();

app.get("/", async (req: Request, res: Response) => {
  const todosRef = await database.collection("todos").get();
  const todos = todosRef.docs.map((doc) => doc.data());
  res.render("pages/home", { todos });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost/${PORT}`);
});
