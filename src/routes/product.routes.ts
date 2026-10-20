import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);


export default router;