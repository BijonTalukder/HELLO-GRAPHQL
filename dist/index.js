import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './gql/schema/index.js';
import { resolvers } from './gql/resolvers/index.js';
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
// const resolvers = {
//   Query: {
//     products: () => db.products,
//     product: (parent: any, args: { productId: string }, context: any) => {
//       const result = db.products.find((pd) => pd.id === args.productId);
//       return result;
//       console.log(parent, args, context);
//     },
//   },
// };
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
