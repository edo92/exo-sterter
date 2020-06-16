import * as express from "express";
import * as path from 'path';

import apolloServer from './apolloServer';
import * as database from './database';
import middlewares from './middleware';

import { PORT } from './keys.config';

const app = express();

// app middlewares
app.use(middlewares);

// connect database
database.connect();

// Apollo server
apolloServer.applyMiddleware({ app });

// Serve static/public
app.use(express.static('public'));
app.use('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Listen to Port
app.listen(PORT, () =>
    console.log(`Server ready at localhost`)
);
