import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from "./db.js";
import { log } from "console";

const typeDefs = `#graphql

  type Product{
    id: ID!,
    name: String,
    image: String,
    description:
    String,
    price: Float,
    quantity: Int,
    onStock:Boolean ,
    categoryId: String,
  }

  type Query {
  products:[Product]
  product(productId:ID!):Product
  }
`;
// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];

const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
      console.log(parent, args, context);
    },
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);