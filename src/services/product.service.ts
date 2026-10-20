import pool from "../db.js";
import AppError from "../errors.js";

export const getProductsService = async () => {
     const result = await pool.query("SELECT * FROM products");

     return result.rows;
};

export const createProductService = async ({ name, price, type }: { name: string, price: number, type: string }) => {
     const result = await pool.query("INSERT INTO products (name, price, type) VALUES($1, $2, $3) RETURNING *", [name, price, type]);

     return result.rows[0];

};

export const getProductService = async (productId: number) => {
     const result = await pool.query("SELECT * FROM products WHERE id = $1", [productId]);

     if (result.rows.length === 0) {
          throw new AppError("Product Not Found", 404);
     }

     return result.rows[0];

};

export const deleteProductService = async (productId: number) => {
     const result = await pool.query("DELETE FROM products WHERE id = $1", [productId]);

     if (result.rowCount === 0) {
          throw new AppError("Product Not Found", 404);
     }

};

export const updateProductService = async ({ name, price, type, productId }: { name: string, price: number, type: string, productId: number }) => {
     const result = await pool.query("UPDATE products SET name = $1, price = $2, type = $3 WHERE id = $4", [name, price, type, productId]);

     if (result.rowCount === 0) {
          throw new AppError("Product Not Found", 404);
     }
};