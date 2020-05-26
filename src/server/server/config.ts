const {
    PORT = '3000',
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secrete'
} = process.env

const config: IServer = {
    port: PORT,
    publicPath: '../public/index.html',
    session: {
        secret: SESS_SECRET,
        resave: false,
        saveUninitialized: true,
        name: SESS_NAME,
        cookie: {
            maxAge: 1000 * 60 * 60,
            sameSite: true,
            secure: NODE_ENV === 'production'
        }
    }
}

interface IServer {
    port: string,
    publicPath: string,
    session: {
        secret: string,
        resave: boolean,
        saveUninitialized: boolean,
        name: string,
        cookie: {
            maxAge: number
            sameSite: boolean,
            secure: boolean
        }
    }
}
export default config;