import express from "express";
import routes from "./route/index.ts"

const app = express();
app.use(express.json());


app.listen(3030);
app.use("/v1", routes)