import express from "express";
import cors from "cors";
import winston from "winston";
import productsRouter from "../routes/product.route.js";
import db from "../repositories/db.js";

const port = 3000;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/produt-api.log",
    }),
  ],
  format: combine(label({ label: "product-api" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/product", productsRouter);
app.get("/", async (req, res) => {
  res.status(200).send(`API Started - Listening on port ${port}`);
});
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

db.sequelize.sync().then(async () => {
  console.log("Connected to database");
});

app.listen(port, () => console.log(`API Started - Listening on port ${port}`));

export default app;
