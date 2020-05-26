require('dotenv').config(); // development env

// modules
import Server from './server';
import DB from './db';

// server
import apiRoutes from './routes';
import srConfig from './server/config';

// db
import dbconfig from './db/config';
import models from './db/models';

const database = new DB(models, dbconfig);
database.connect();

const server = new Server(apiRoutes, srConfig);
server.start();