import * as express from "express";
import * as path from 'path';
import * as mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { ApolloServer } from 'apollo-server-express';

import * as config from './config';
import { resolvers, typeDefs } from './graph';

const app = express();
const { db, server } = config;

// app middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// MongoDB/mongoose connection
mongoose.connect(db.uri, db.options);
mongoose.connection.once('open', () => {
    console.log('mongoose connection successful');
});

// Apollo server
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

// Serve public
app.use(express.static('public'));
app.use('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// Listen to Port
app.listen({ port: server.port }, () =>
    console.log(`Server ready at localhost`)
);
