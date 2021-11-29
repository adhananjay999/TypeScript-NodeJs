import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/posts";
import "dotenv/config";
import config from "./config/config";
import mongoose from "mongoose";
const NAMESPACE = "Server";
const router: Express = express();


/**Connect to MongoDB */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    console.log(NAMESPACE, "Connected to MongoDB");
  })
  .catch((error) => {
    console.log(NAMESPACE, error.message, error);
  });

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());


/** Routes */
router.use("/v1", routes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
