import { ApolloServer } from 'apollo-server-express';
import { gql } from "apollo-server-express";
import { query, mutation } from './resolvers';
import context from './context';
import defs from './typeDefs';

const config = {
    typeDefs: gql`${defs}`,
    context: context,
    resolvers: {
        Query: { ...query },
        Mutation: { ...mutation }
    },
}

export default new ApolloServer(config); 