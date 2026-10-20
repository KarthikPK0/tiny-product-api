import type { Request, Response } from "express";
import productSchema from "../product.schema.js";
import { createProductService, deleteProductService, getProductService, updateProductService, getProductsService } from "../services/product.service.js";
import { validateProductId } from "../utils/validateProductId.js";

export const getProducts = async(req: Request, res: Response) => {
    const result = await getProductsService();

    return res.status(200).json(result);
};

export const createProduct = async(req: Request, res: Response) => {
    const { name, price, type } = productSchema.parse(req.body);

    const result = await createProductService({name, price, type});

    return res.status(201).json(result);
};

export const getProduct = async(req: Request, res: Response) => {

    const productId = Number(req.params.id);

    validateProductId(productId);
    
    const result = await getProductService(productId);

    return res.json(result);
};

export const deleteProduct = async(req: Request, res: Response) => {
    const productId = Number(req.params.id);

    validateProductId(productId);

    await deleteProductService(productId);

    return res.status(200).json({
        message: "Product deleted successfully"
    })
};

export const updateProduct = async(req: Request, res: Response) => {
    const productId = Number(req.params.id);

    validateProductId(productId);

    const { name, price, type } = productSchema.parse(req.body);

    await updateProductService({ name, price, type, productId });

    return res.status(200).json({
        message: "Product details updated successfully"
    })
};