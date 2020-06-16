import * as mongoose from 'mongoose';
import * as models from './models';
import * as actions from './actions';

import { MONGODB_URI } from '../keys.config';

interface Idatabase {
    uri: string,
    opts: object
}

const config: Idatabase = {
    uri: MONGODB_URI,
    opts: {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
}

const connect = (): void => {
    // MongoDB/mongoose connection
    mongoose.connect(config.uri, config.opts);
    mongoose.connection.once('open', () => {
        console.log('mongoose connection successful');
    });
}

export { models, actions, connect }