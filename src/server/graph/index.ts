import { gql } from "apollo-server-express";
import { query, mutation } from './resolvers';
import defs from './typeDefs';

export const typeDefs = gql`${defs}`;

export const resolvers = {
    Query: { ...query },
    Mutation: { ...mutation }
};
