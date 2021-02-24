import { NextFunction, Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Hello World!");
});

export default router;
