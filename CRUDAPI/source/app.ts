import * as http from "http";
import express, { Application, Request, Response, NextFunction } from "express";
import morganMiddleware from "./config/middleware/morgan-middleware";
import {PostsRoutes} from "./routes/posts-routes-config";
import "dotenv/config";
import config from "./config/database/config";
import mongoose from "mongoose";
import Logger from "./config/logger/logger-config";
import { CommonRoutesConfig } from "./routes/common/common-routes-config";

const app: Application = express();

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${config.config.port}`;

/**Connect to MongoDB */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    Logger.info(`Server is Connected to MongoDB`);
    /** Server */
    const httpServer = http.createServer(app);
    httpServer.listen(config.config.port, () => Logger.debug(runningMessage));
  })
  .catch((error) => {
    Logger.error(`Server, ${(error.message, error)}`);
  });

/** Logging */
// app.use(morgan("dev"));
app.use(morganMiddleware);

/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json());

/** Routes */
// app.use("/v1", postRoutes);
const routes: Array<CommonRoutesConfig> = [];
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new PostsRoutes(app));

// /** Error handling */
// app.use((req, res, next) => {
//   const error = new Error("not found");
//   return res.status(404).json({ message: error.message });
// });

