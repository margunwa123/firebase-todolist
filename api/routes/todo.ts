import { Request, Response, Router } from "express";
import database from "@/database";

const router = Router();

const tododb = database.collection("todos");

router.get("/", async (req, res) => {
  const docs = (await tododb.get()).docs;
  docs.forEach((doc) => {
    console.log(doc.data());
  });
  res.send("hola");
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const todo: todo = {
      name,
      status: "ready",
    };

    const doc = await tododb.add(todo);
    res.redirect("/");
  } catch (err) {
    console.log(err.response.data.message);
  }
});

export default router;
