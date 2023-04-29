import { Request, Response, NextFunction } from "express";
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  res.status(500).json({ error: "Something went wrong" });
};
export default errorHandler;
