import type { Request, Response, NextFunction } from "express";
import AppError from "../errors.js";
import { ZodError } from "zod";

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.issues
        });
    }

    console.error(err);

    return res.status(500).json({
        message: "Internal Server Error"
    });

};

export default errorMiddleware;