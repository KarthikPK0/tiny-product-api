import { z } from "zod";

const productSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    type: z.string().min(1)
});

export default productSchema;