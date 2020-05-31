// ========= Dev =========
import dotenv from 'dotenv';
dotenv.config()
// ===========  ==========

// ==== Interfaces ====
interface Idb {
    uri: string,
    options: object
}

interface IServer {
    port: string
}

// ===== Configs ===== 
const { MONGODB_URI } = process.env;

export const server: IServer = {
    port: process.env.PORT || '3000'
}

export const db: Idb = {
    uri: MONGODB_URI,
    options: {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
}

