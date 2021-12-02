import { Request, Response } from "express";

export class JSONResponse {
  constructor() {
    //todo implement constructor
  }
  static success(
    res: Response,
    data?: any,
    statusCode?: number,
    message?: String,
    req?: Request
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
    req?: Request
  ) {
    res.status(statusCode || 500).json({
      message: message || "Internal Server Error",
      data: data,
    });
  }
}
