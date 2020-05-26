import * as mongoose from 'mongoose';

class DB {
    private config: any;
    public models: any;

    constructor(models: object, config: object) {
        this.config = config;
        this.models = models;
    }

    public connect = (): void => {
        mongoose.connect(this.config.uri, this.config.options);
        mongoose.connection.once('open', () => {
            console.log('mongoose connection successful');
        });
    }
};

export default DB; 