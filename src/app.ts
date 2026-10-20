import express from "express";
import errorMiddleware from "./middlewares/error.middleware.js";
import productRoutes from "./routes/product.routes.js";


const app = express();
app.use(express.json());
app.use(productRoutes);
app.use(errorMiddleware);

export default app;