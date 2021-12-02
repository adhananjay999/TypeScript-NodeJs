import { Response } from "express";

export class JSONResponse {
  constructor() {
    //todo implement constructor
  }
  static success(
    res: Response,
    statusCode?: number,
    data?: any,
    message?: String,
  ) {
    res.status(statusCode || 200).json({
      message: message,
      data: data,
    });
  }

  static serverError(
    res: Response,
    message: String,
    statusCode?: number,
    data?: any,
  ) {
    res.status(statusCode || 500).json({
      message: message || "Internal Server Error",
      data: data,
    });
  }
}
