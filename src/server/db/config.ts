const {
    MONGODB_URI
} = process.env

const config: IConfig = {
    uri: MONGODB_URI,
    options: {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
}

export default config;

interface IConfig {
    uri: string,
    options: object
}