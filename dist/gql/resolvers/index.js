import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find((ca) => ca.id === args.categoryId);
            return result;
        },
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find((category) => category.id === parent.categoryId);
            return result;
        },
    },
    Category: {
        product: (parent, args, context) => {
            const result = db.products.filter((product) => product.categoryId === parent.id);
            return result;
        },
    },
};
