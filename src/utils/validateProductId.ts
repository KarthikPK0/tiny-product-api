import AppError from "../errors.js"

export const validateProductId = (productId: number) => {
    if( !Number.isInteger(productId) || productId <= 0 ) {
        throw new AppError("Invalid Input", 400);
    }
};