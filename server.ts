import express, { Application } from "express";
import { assignRouters } from "@/routes";

const app: Application = express();

const PORT = process.env.PORT || 3000;

assignRouters(app);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost/${PORT}`);
});
